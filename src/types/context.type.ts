import { IAnimal } from './animal.type';

export type ContextType = {
  details: IAnimal | null;
  setDetails: React.Dispatch<React.SetStateAction<IAnimal | null>>;
};
