import { Option } from "../components/select/select.component";

export const LOCATIONS: Option[] = [
  {
    value: "new-york",
    description: "New York",
  },
  {
    value: "orlando",
    description: "Orlando",
  },
  {
    value: "barbados",
    description: "Barbados",
  },
  {
    value: "toronto",
    description: "Toronto",
  },
];

export const STAR = {
  EMPTY: "☆",
  FILLED: "★",
};

export const HOTEL_FACILTITIES = [
  "Restaurant",
  "Bar",
  "Free Parking",
  "Room Service",
  "Safety Deposit Box",
  "Fitness Centre/Gym",
  "Laundry Service",
  "Internet Access",
  "Swimming Pool",
  "Hot tub",
];

export const PRICE_PER_PERSON = [
  {
    label: "up to $100",
    value: [0, 100],
  },
  {
    label: "$100 to $200",
    value: [100, 200],
  },
  {
    label: "$200 to $500",
    value: [200, 500],
  },
  {
    label: "$500 to $1000",
    value: [500, 1000],
  },
  {
    label: "$1000 to $2000",
    value: [1000, 2000],
  },
  {
    label: "$2000 to $5000",
    value: [2000, 5000],
  },
  {
    label: "$5000 to $10000",
    value: [5000, 10000],
  },
];
