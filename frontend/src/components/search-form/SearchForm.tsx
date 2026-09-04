export function SearchForm() {
  return (
    <form action="">
      <div>
        <input type="text" className="w-full rounded border px-2 py-1" />
      </div>
      <div>
        <label htmlFor="" className="font-semibold">
          Instrument
        </label>
        <div>
          <input
            type="checkbox"
            id="acoustic-guitar"
            name="acoustic-guitar"
            checked
          />
          Acoustic Guitar
        </div>
        <div>
          <input
            type="checkbox"
            id="electric-guitar"
            name="electric-guitar"
            checked
          />
          Electric Guitar
        </div>
        <div>
          <input type="checkbox" id="bass" name="bass" checked />
          Bass
        </div>
      </div>
      <div>
        <label htmlFor="" className="font-semibold">
          Sort By
        </label>
        <div>
          <input type="radio" name="sort" value="favorites" checked />
          Favorites
        </div>
        <div>
          <input type="radio" name="sort" value="rating" />
          Rating
        </div>
      </div>
    </form>
  );
}
