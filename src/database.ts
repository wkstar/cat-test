import { IUser, EPouchSize, TPouchSizePrices } from './user.types';

const users: IUser[] = [
  {
    id: 'ff535484-6880-4653-b06e-89983ecf4ed5',
    firstName: 'Kayleigh',
    lastName: 'Wilderman',
    email: 'Kayleigh_Wilderman@hotmail.com',
    cats: [
      {
        name: 'Dorian',
        subscriptionActive: true,
        breed: 'Thai',
        pouchSize: EPouchSize.C,
      },
      {
        name: 'Ocie',
        subscriptionActive: true,
        breed: 'Somali',
        pouchSize: EPouchSize.F,
      },
      {
        name: 'Eldridge',
        subscriptionActive: false,
        breed: 'Himalayan',
        pouchSize: EPouchSize.A,
      },
    ],
  },
];

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
