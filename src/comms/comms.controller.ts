import { NotFoundException, Controller, Get, Param } from '@nestjs/common';

import { getUser, getPouchSizePrice } from '../database';
import { ICat } from 'src/user.types';

const FREEGIFT_MINIMUM = 120;

@Controller('comms/your-next-delivery/')
export class CommsController {
  @Get(':userId')
  getUserId(@Param('userId') userId: string) {
    const user = getUser(userId);
    if (!user) {
      throw new NotFoundException('Invalid user');
    }

    const catNames = user.cats.map((cat) => cat.name);
    const totalPrice = getTotalPrice(user.cats);

    return {
      freeGift: getFreeGift(totalPrice),
      message: getMessage(user.firstName, catNames),
      title: getTitle(catNames),
      totalPrice,
    };
  }
}

const formatCatNamesString = (catNames: string[]) =>
  new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(
    catNames,
  );

const getTitle = (catNames: string[]): string =>
  `Your next delivery for ${formatCatNamesString(catNames)}`;

const getMessage = (firstName: string, catNames: string[]): string =>
  `Hey ${firstName}! In two days' time, we'll be charging you for your next order for ${formatCatNamesString(
    catNames,
  )}'s fresh food.`;

const getTotalPrice = (cats: ICat[]): number =>
  cats
    .filter((cat) => cat.subscriptionActive)
    .reduce(
      (accumulator, { pouchSize }) =>
        accumulator + getPouchSizePrice(pouchSize),
      0,
    );

const getFreeGift = (totalPrice: number) => totalPrice > FREEGIFT_MINIMUM;
