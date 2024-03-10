interface OptionsTypes {
  name: string;
  price: number;
  qty?: number;
}

export interface GolaDataType {
  id: number;
  item: string;
  options: OptionsTypes[];
}

export interface OwnerDataType {
  id: string;
  orderTaker: string;
  time: string;
  token: string;
}

export const initGolaData: GolaDataType[] = [
  {
    id: 0,
    item: "Mawa Malai",
    options: [
      { name: "Ice Dish", price: 120, qty: 0 },
      { name: "stick", price: 60, qty: 0 },
      { name: "Chhin", price: 70, qty: 0 },
      { name: "RabadiChhin", price: 80, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 1,
    item: "Chocolate",
    options: [
      { name: "Ice Dish", price: 120, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 80, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 2,
    item: "Raj Bhog",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 3,
    item: "Rose",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 4,
    item: "Mango",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 5,
    item: "Kala Khatta",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 6,
    item: "Orange",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 7,
    item: "Blue Berry",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
  {
    id: 8,
    item: "Strawberry",
    options: [
      { name: "Ice Dish", price: 100, qty: 0 },
      { name: "stick", price: 50, qty: 0 },
      { name: "Chhin", price: 60, qty: 0 },
      { name: "RabadiChhin", price: 70, qty: 0 },
      { name: "Extra fudge", price: 20, qty: 0 },
      { name: "Extra Rabadi", price: 20, qty: 0 },
    ],
  },
];
