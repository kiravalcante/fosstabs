import { useState } from "react";
import type { ChangeEvent, FormEventHandler } from "react";

import {
  createDefaultSearchFormData,
  INSTRUMENT_LABELS,
  SEARCH_SORT_LABELS,
} from "@/defaults/search-form/defaults";
import { INSTRUMENTS, SORT_OPTIONS } from "@/types/search-form/types";
import type {
  Instrument,
  SearchFormProps,
  Sort,
} from "@/types/search-form/types";

export function SearchForm({ onSearch }: SearchFormProps) {
  const [searchFormData, setSearchFormData] = useState(
    createDefaultSearchFormData,
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSearch?.({
      ...searchFormData,
      query: searchFormData.query.trim(),
      instruments: { ...searchFormData.instruments },
    });
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFormData((prev) => ({
      ...prev,
      query: event.currentTarget.value,
    }));
  };

  const setInstrument = (instrument: Instrument, checked: boolean) => {
    setSearchFormData((prev) => ({
      ...prev,
      instruments: {
        ...prev.instruments,
        [instrument]: checked,
      },
    }));
  };

  const setSort = (sort: Sort) => {
    setSearchFormData((prev) => ({
      ...prev,
      sort,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
          placeholder="Song, artist, or album"
          autoComplete="off"
          className="w-full rounded border px-2 py-1"
        />
      </div>

      <fieldset>
        <legend className="text-2xl font-semibold">Instrument</legend>

        <div>
          {INSTRUMENTS.map((instrument) => (
            <label key={instrument} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={instrument}
                checked={searchFormData.instruments[instrument]}
                onChange={(event) =>
                  setInstrument(instrument, event.currentTarget.checked)
                }
              />
              {INSTRUMENT_LABELS[instrument]}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold">Sort By</legend>

        <div>
          {SORT_OPTIONS.map((sort) => (
            <label key={sort} className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                value={sort}
                checked={searchFormData.sort === sort}
                onChange={() => setSort(sort)}
              />
              {SEARCH_SORT_LABELS[sort]}
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="rounded border px-3 py-1">
        Search
      </button>
    </form>
  );
}
