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

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await API.get(
          `search?pageNumber=${pageNumber}&pageSize=${pageSize}`
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
  }, [pageNumber, pageSize]);

  return (
    <Wrapper>
      <Header>
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
