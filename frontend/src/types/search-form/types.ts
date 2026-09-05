export type SearchFormData = {
  query: string;
  instruments: {
    acousticGuitar: boolean;
    electricGuitar: boolean;
    bass: boolean;
  };
  sort: "favorites" | "rating";
};
