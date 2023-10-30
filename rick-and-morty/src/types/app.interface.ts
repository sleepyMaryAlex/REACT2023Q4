import { ICharacter } from './character.type';

export interface IApp {
  characters: ICharacter[];
  pages: number;
  count: number;
  currentPage: number;
  query: string;
  isLoading: boolean;
}
