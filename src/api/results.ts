import API from './api';

export async function getAnimals(pageNumber: number, pageSize: number) {
  return await API.get(
    `/search?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`
  );
}

export async function getAnimalsByQuery(
  pageNumber: number,
  pageSize: number,
  query: string
) {
  return await API.post(
    `/search?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`,
    { name: query },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
}

export async function getAnimal(id: string) {
  return await API.get(`?uid=${id}`);
}
