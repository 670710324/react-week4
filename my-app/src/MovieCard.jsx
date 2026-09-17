import { useState } from 'react';   // 1. import จาก react

function MovieCard({ title, year, poster }) {
  const [likes, setLikes] = useState(0);   // 2. ประกาศ state

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      {poster && (
        <img src={poster} alt={`โปสเตอร์ ${title}`}
             className="aspect-[2/3] w-full object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title} ({year})</h3>
        <button
          onClick={() => setLikes(likes + 1)}
          className="mt-3 rounded-lg bg-pink-100 px-4 py-2 text-pink-700
                     font-semibold hover:bg-pink-200 transition">
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;