function GenreBox({ genre, onGenreChange, genres }) {
  return (
    <select
      value={genre}
      onChange={event => onGenreChange(event.target.value)}
      className="mt-3 rounded-lg border border-slate-300 px-3 py-2"
    >
      <option value="all">ทุกแนว</option>
      {genres.map(movieGenre => (
        <option key={movieGenre} value={movieGenre}>
          {movieGenre}
        </option>
      ))}
    </select>
  );
}

export default GenreBox;