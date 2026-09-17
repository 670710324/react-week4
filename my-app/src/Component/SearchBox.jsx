function SearchBox({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={event => setQuery(event.target.value)}
      placeholder="ค้นหาหนัง..."
      className="w-full rounded-lg border border-slate-300 px-3 py-2"
    />
  );
}

export default SearchBox;