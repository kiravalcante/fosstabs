import type { SearchFormData } from "@/types/search-form/types";

export const DEFAULT_SEARCH_FORM_DATA: SearchFormData = {
  query: "",
  instruments: {
    acousticGuitar: true,
    electricGuitar: true,
    bass: true,
  },
  sort: "favorites",
};
