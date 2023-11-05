import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ResultPanel from './components/ResultPanel';
import Animal from './components/Animal';
import { IAnimal } from './types/animal.type';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { Outlet, useSearchParams } from 'react-router-dom';
import PageSizeSelect from './components/PageSizeSelect';
import { ContextType } from './types/context.type';
import Overlay from './components/Overlay';
import { getAnimals, getAnimalsByQuery } from './api/results';

const Wrapper = styled.div`
  max-width: 1680px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function App() {
  const [animals, setAnimals] = useState<Readonly<IAnimal[]>>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(
    Number(localStorage.getItem('pageNumber')) || 1
  );
  const [pageSize, setPageSize] = useState<number>(
    Number(localStorage.getItem('pageSize')) || 10
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(
    localStorage.getItem('query') || ''
  );
  const [details, setDetails] = useState<IAnimal | null>(
    JSON.parse(localStorage.getItem('details') as string) || null
  );
  const [, setSearchParams] = useSearchParams();
  const fnRef = useRef(setSearchParams);
  const stableFn = useCallback((value: string) => fnRef.current(value), []);

  useEffect(() => {
    setIsLoading(true);
    setTotalPages(0);
    stableFn(
      query
        ? `/search?page=${pageNumber}&query=${query}&pageSize=${pageSize}`
        : `/search?page=${pageNumber}&pageSize=${pageSize}`
    );
    async function fetchData() {
      try {
        const response = query
          ? await getAnimalsByQuery(pageNumber, pageSize, query)
          : await getAnimals(pageNumber, pageSize);
        const { animals, page } = response.data;
        setAnimals(animals);
        setTotalPages(page.totalPages);
        setTotalElements(page.totalElements);
        setIsLoading(false);
      } catch (error) {
        setAnimals([]);
        setTotalPages(0);
        setTotalElements(0);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [pageNumber, pageSize, query, stableFn]);

  function handleSubmit(value: string): void {
    setPageNumber(1);
    setQuery(value);
    localStorage.setItem('query', value);
  }

  function handlePageSizeChange(value: number): void {
    setPageNumber(1);
    setPageSize(value);
    localStorage.setItem('pageSize', String(value));
  }

  return (
    <Wrapper>
      <Box>
        {details && <Overlay setDetails={setDetails} />}
        <Header>
          <SearchBar query={query} handleSubmit={handleSubmit} />
          <ResultPanel
            totalPages={totalPages}
            totalElements={totalElements}
            pageNumber={pageNumber}
          />
          {totalPages && (
            <Pagination
              totalPages={totalPages}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          )}
          {totalPages && (
            <PageSizeSelect
              pageSize={pageSize}
              handlePageSizeChange={handlePageSizeChange}
            />
          )}
        </Header>
        <Main isLoading={isLoading}>
          {animals.map((animal: IAnimal) => (
            <Animal
              key={animal.uid}
              animal={animal}
              setDetails={setDetails}
              setIsLoading={setIsLoading}
            />
          ))}
        </Main>
      </Box>
      <Outlet context={{ details, setDetails } satisfies ContextType} />
    </Wrapper>
  );
}
