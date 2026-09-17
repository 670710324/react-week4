import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../DATA/data';
import SearchBox from '../Component/SearchBox';
import GenreBox from '../Component/GenreBox';

const GENRES = [...new Set(movies.map(movie => movie.genre))];

function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  const searchQuery = query.trim().toLowerCase();
  const shown = movies.filter(movie => {
    const matchesTitle = movie.title
      .toLowerCase()
      .split(' ')
      .some(word => word.startsWith(searchQuery));
    const matchesGenre = genre === 'all' || movie.genre === genre;

    return matchesTitle && matchesGenre;
  });

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <GenreBox genre={genre} onGenreChange={setGenre} genres={GENRES} />

      {shown.length === 0 ? (
        <p className="mt-6 text-center text-slate-500">ไม่พบหนังที่ค้นหา</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                             transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-800">{movie.title}</h3>
              <p className="mt-1 text-sm text-slate-500">ปี {movie.year} · {movie.genre}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;