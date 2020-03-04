import { generateIntegerInRange, generateTitle, generateDescription } from '../../utils/faker.functions';

export const randomId: number = generateIntegerInRange(100, 200);
export const randomUserId: number = generateIntegerInRange(1, 10);
export const randomTitle: string = generateTitle();
export const randomDescription: string = generateDescription();
