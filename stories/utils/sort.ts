import { User } from '../types';

export const sortByName = (optionA: User, optionB: User) => {
  const nameA = optionA.name.toLowerCase();
  const nameB = optionB.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0;
};

export const sortByAge = (optionA: User, optionB: User) => optionA.age - optionB.age;
