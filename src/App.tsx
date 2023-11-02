import styled from 'styled-components';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ResultPanel from './components/ResultPanel';
import Animal from './components/Animal';
import API from './api/api';
import { IApp } from './types/app.interface';
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

export default class App extends Component<object, IApp> {
  state = {
    animals: [],
    totalPages: 0,
    totalElements: 0,
    pageNumber: 1,
    pageSize: 10,
    isLoading: false,
  };

  updateState = async () => {
    const { pageNumber, pageSize } = this.state;
    try {
      const response = await API.get(
        `search?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      const { animals, page } = response.data;
      this.setState({
        animals,
        totalPages: page.totalPages,
        totalElements: page.totalElements,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        animals: [],
        totalPages: 0,
        totalElements: 0,
        isLoading: false,
      });
    }
  };

  componentDidMount(): void {
    this.setState({ isLoading: true }, this.updateState);
  }

  render() {
    const { animals, totalPages, totalElements, isLoading } = this.state;
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
}
