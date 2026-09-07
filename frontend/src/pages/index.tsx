import { SearchForm } from "@/components/search-form/SearchForm";

export function Index() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-screen px-8 pt-32 sm:w-md sm:px-0">
        <div>
          <h1 className="text-center font-serif text-6xl font-semibold">
            fosstabs
          </h1>
        </div>
        <div>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
