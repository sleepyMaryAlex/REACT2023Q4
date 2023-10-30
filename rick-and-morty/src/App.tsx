import styled from 'styled-components';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { ICharacter } from './types/character.type';
import SearchBar from './components/SearchBar';
import ResultPanel from './components/ResultPanel';
import Character from './components/Character';
import API from './api/api';
import { IApp } from './types/app.interface';
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
    characters: [],
    pages: 0,
    count: 0,
    currentPage: 1,
    query: localStorage.getItem('query') || '',
    isLoading: false,
  };

  updateState = async () => {
    const { currentPage, query } = this.state;
    try {
      const response = await API.get(`/?page=${currentPage}&name=${query}`);
      const { results, info } = response.data;
      this.setState({
        characters: results,
        pages: info.pages,
        count: info.count,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        characters: [],
        pages: 0,
        count: 0,
        isLoading: false,
      });
    }
  };

  componentDidMount(): void {
    this.setState({ isLoading: true }, this.updateState);
  }

  handleSubmit = (query: string): void => {
    this.setState({ isLoading: true, query }, this.updateState);
    localStorage.setItem('query', query);
  };

  render() {
    const { characters, pages, count, query, isLoading } = this.state;
    return (
      <Wrapper>
        <Header>
          <SearchBar query={query} handleSubmit={this.handleSubmit} />
          {<ResultPanel pages={pages} count={count} />}
        </Header>
        {isLoading ? (
          <Loader />
        ) : (
          <Main>
            {characters.map((character: ICharacter) => (
              <Character key={character.id} character={character} />
            ))}
          </Main>
        )}
      </Wrapper>
    );
  }
}
