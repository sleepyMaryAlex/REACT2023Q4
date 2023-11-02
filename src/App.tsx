import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ResultPanel from './components/ResultPanel';
import Animal from './components/Animal';
import API from './api/api';
import { IAnimal } from './types/animal.type';
import Loader from './components/Loader';

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
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateState = useCallback(async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  }, [pageNumber, pageSize]);

  useEffect(() => {
    updateState();
  }, [updateState]);

  return (
    <Wrapper>
      <Header>
        <ResultPanel totalPages={totalPages} totalElements={totalElements} />
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
