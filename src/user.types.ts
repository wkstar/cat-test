export interface ICat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: EPouchSize;
}

export enum EPouchSize {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

export type TPouchSizePrices = {
  [key in EPouchSize]: number;
};

export enum EBreed {
  Thai = 'Thai',
  Somali = 'Somali',
  Himalayan = 'Himalayan',
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: ICat[];
}
