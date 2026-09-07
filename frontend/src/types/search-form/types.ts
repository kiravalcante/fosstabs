export const INSTRUMENTS = [
  "acousticGuitar",
  "electricGuitar",
  "bass",
] as const;

export type Instrument = (typeof INSTRUMENTS)[number];

export const SORT_OPTIONS = ["favorites", "rating"] as const;

export type Sort = (typeof SORT_OPTIONS)[number];

export type InstrumentSelection = Record<Instrument, boolean>;

export type SearchFormData = {
  query: string;
  instruments: InstrumentSelection;
  sort: Sort;
};

export type SearchFormProps = {
  /** Called with a fresh, normalized snapshot of the selected filters. */
  onSearch?: (filters: SearchFormData) => void;
};
