import { QuantityType } from "./recipe.type";

export function getRandomRecipeID(): number {
  return Math.floor(Math.random() * 67) + 1;
}

export function shortenRatingNumber(number: number): string {
  const suffixes = ["", "K", "M"];

  if (number < 1000) {
    return number.toString();
  }

  let suffixIndex = 0;
  let shortened = number;
  while (shortened >= 1000) {
    shortened /= 1000;
    suffixIndex++;
  }

  return shortened.toFixed(0) + suffixes[suffixIndex];
}

export function getQuantityByServing(quantity: QuantityType[], serve: number): string | null {
  const obj = quantity.find(item => Number(Object.keys(item)[0]) === serve);
  return obj ? Object.values(obj)[0] : null;
}

