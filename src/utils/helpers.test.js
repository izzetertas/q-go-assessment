import { formatNumber } from './helpers';

describe.only('formatNumber', () => {

   it('return num if num is less than 1000', () => {
      expect(formatNumber(405)).toBe("405");
   });

   it('return num if num is greater than 1000 and less than 1m', () => {
      expect(formatNumber(2001)).toBe("2,001");
   });
 });