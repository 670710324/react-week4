function About() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">เกี่ยวกับเรา</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <div className="mx-auto mt-10 flex max-w-xl items-center gap-4 border-t border-slate-200 pt-6 text-left">
        <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer"
           className="shrink-0 font-bold text-cyan-600">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/stacked-green.svg"
            alt="TMDB"
            className="h-12 w-auto"
          />
        </a>
        <p className="text-sm text-slate-500">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </div>
  );
}

export default About;