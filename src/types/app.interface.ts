import { IAnimal } from './animal.type';

export interface IApp {
  animals: Readonly<IAnimal[]>;
  totalPages: number;
  totalElements: number;
  pageNumber: number;
  pageSize: number;
  isLoading: boolean;
}
