import { useState } from "react";
import type { ChangeEvent, SubmitEventHandler } from "react";

import { DEFAULT_SEARCH_FORM_DATA } from "@/defaults/search-form/defaults";
import type { SearchFormData, Sort } from "@/types/search-form/types";

export function SearchForm() {
  const [searchFormData, setSearchFormData] = useState<SearchFormData>({
    ...DEFAULT_SEARCH_FORM_DATA,
    instruments: { ...DEFAULT_SEARCH_FORM_DATA.instruments },
  });

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFormData((prev) => ({
      ...prev,
      query: event.currentTarget.value,
    }));
  };

  const handleInstrumentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;

    setSearchFormData((prev) => ({
      ...prev,
      instruments: {
        ...prev.instruments,
        [name]: checked,
      },
    }));
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value as Sort;

    setSearchFormData((prev) => ({
      ...prev,
      sort: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Query */}
      <div>
        <label htmlFor="query" className="text-2xl font-semibold">
          Search
        </label>

        <input
          id="query"
          name="query"
          type="search"
          value={searchFormData.query}
          onChange={handleQueryChange}
          placeholder="Search..."
          className="w-full rounded border px-2 py-1"
        />
      </div>

      {/* Instruments */}
      <fieldset>
        <legend className="text-2xl font-semibold">Instrument</legend>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="acousticGuitar"
              checked={searchFormData.instruments.acousticGuitar}
              onChange={handleInstrumentChange}
            />
            Acoustic Guitar
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="electricGuitar"
              checked={searchFormData.instruments.electricGuitar}
              onChange={handleInstrumentChange}
            />
            Electric Guitar
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="bass"
              checked={searchFormData.instruments.bass}
              onChange={handleInstrumentChange}
            />
            Bass
          </label>
        </div>
      </fieldset>

      {/* Sort */}
      <fieldset>
        <legend className="text-2xl font-semibold">Sort By</legend>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="favorites"
              checked={searchFormData.sort === "favorites"}
              onChange={handleSortChange}
            />
            Favorites
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="rating"
              checked={searchFormData.sort === "rating"}
              onChange={handleSortChange}
            />
            Rating
          </label>
        </div>
      </fieldset>

      <button type="submit" className="rounded border px-3 py-1">
        Search
      </button>
    </form>
  );
}
