import type {
  Instrument,
  SearchFormData,
  Sort,
} from "@/types/search-form/types";

export const INSTRUMENT_LABELS: Record<Instrument, string> = {
  acousticGuitar: "Acoustic guitar",
  electricGuitar: "Electric guitar",
  bass: "Bass",
};

export const SEARCH_SORT_LABELS: Record<Sort, string> = {
  favorites: "Favorites",
  rating: "Rating",
};

export const DEFAULT_SEARCH_FORM_DATA: SearchFormData = {
  query: "",
  instruments: {
    acousticGuitar: true,
    electricGuitar: true,
    bass: true,
  },
  sort: "favorites",
};

/** Returns independent state so nested instrument values are never shared. */
export function createDefaultSearchFormData(): SearchFormData {
  return {
    ...DEFAULT_SEARCH_FORM_DATA,
    instruments: { ...DEFAULT_SEARCH_FORM_DATA.instruments },
  };
}
