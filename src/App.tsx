import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ResultPanel from './components/ResultPanel';
import Animal from './components/Animal';
import API from './api/api';
import { IAnimal } from './types/animal.type';
import Loader from './components/Loader';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1680px;
  margin: 0 auto;
`;

export default function App() {
  const [animals, setAnimals] = useState<Readonly<IAnimal[]>>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(
    Number(localStorage.getItem('pageNumber')) || 1
  );
  const [pageSize] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(
    localStorage.getItem('query') || ''
  );
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(`search?page=${pageNumber}&query=${query}`);
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = query
          ? await API.post(
              `search?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`,
              { name: query },
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            )
          : await API.get(
              `search?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`
            );
        const { animals, page } = response.data;
        setAnimals(animals);
        setTotalPages(page.totalPages);
        setTotalElements(page.totalElements);
      } catch (error) {
        setAnimals([]);
        setTotalPages(0);
        setTotalElements(0);
      }
    }
    fetchData();
    setIsLoading(false);
  }, [pageNumber, pageSize, query, setSearchParams]);

  function handleSubmit(value: string): void {
    setPageNumber(1);
    setQuery(value);
    localStorage.setItem('query', value);
  }

  return (
    <Wrapper>
      <Header>
        <SearchBar query={query} handleSubmit={handleSubmit} />
        <ResultPanel
          totalPages={totalPages}
          totalElements={totalElements}
          pageNumber={pageNumber}
        />
        <Pagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Header>
      {isLoading ? (
        <Loader />
      ) : (
        <Main>
          {animals.map((animal: IAnimal) => (
            <Animal key={animal.uid} animal={animal} />
          ))}
        </Main>
      )}
    </Wrapper>
  );
}
