import MovieCard from '../MovieCard';
import MovieGallery from '../MovieGallery';
import { movies } from '../DATA/data';

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <h2 className="mt-10 text-xl font-bold text-slate-700">หนังแนะนำ</h2>
      <div className="mx-auto mt-4 grid max-w-4xl gap-6 text-left md:grid-cols-3">
        {movies.slice(0, 3).map(movie => (
          <MovieCard key={movie.id} title={movie.title} year={movie.year} poster={movie.poster} />
        ))}
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-700">ดูหนังทีละเรื่อง</h2>
      <MovieGallery />
    </div>
  );
}

export default Home;