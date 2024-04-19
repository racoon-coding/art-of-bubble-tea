export type KFTea = {
  name: string;
  syrup: Data[] | null;
  tea: Data[] | null;
  water: Data[] | null;
  milk?: Data[] | null;
  honey: Data[] | null;
  availability: boolean | string;
  note: string | null;
};

type Data = {
  value: string | number;
  unit: Unit;
  type: Recipe;
  note: string;
};
type Unit = FluidUnit | WeightUnit | OtherUnit;
export enum WeightUnit {
  g = 'g',
  kg = 'kg',
}
export enum FluidUnit {
  ml = 'ml',
  oz = 'oz',
}
export enum OtherUnit {
  ts = 'teaspoon'
}
export enum Recipe {
  Standard,
  OneTopping,
  TwoorMoreToppings
}