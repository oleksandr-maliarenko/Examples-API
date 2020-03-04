import * as casual from 'casual';

export const generateTitle = (): string => casual.title;
export const generateDescription = (): string => casual.description;
export const generateIntegerInRange = (min?: number, max?: number): number => casual.integer(min, max);
