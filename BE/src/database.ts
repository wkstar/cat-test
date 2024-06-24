import { IUser, EPouchSize, TPouchSizePrices } from './user.types';
import rawUsers from '../data.js';

const users: IUser[] = rawUsers.map((rawUser) => ({
  ...rawUser,
  cats: rawUser.cats.map((rawCat) => ({
    ...rawCat,
    pouchSize: EPouchSize[rawCat.pouchSize as keyof typeof EPouchSize],
  })),
}));

const pouchSizePrices: TPouchSizePrices = {
  [EPouchSize.A]: 55.5,
  [EPouchSize.B]: 59.5,
  [EPouchSize.C]: 62.75,
  [EPouchSize.D]: 66,
  [EPouchSize.E]: 69,
  [EPouchSize.F]: 71.25,
};

export const getUser = (userId: string): IUser | undefined =>
  users.find((user) => user.id === userId);

export const getPouchSizePrice = (pouchSize: EPouchSize): number =>
  pouchSizePrices[pouchSize];
