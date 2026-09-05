export type Sort = "favorites" | "rating";

export type SearchFormData = {
  query: string;
  instruments: {
    acousticGuitar: boolean;
    electricGuitar: boolean;
    bass: boolean;
  };
  sort: Sort;
};
