import React from "react";
import MoviesRow from "./MoviesRow";
const posterFilm = [
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
  "https://pic5.iqiyipic.com/image/20230727/61/74/a_100537757_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
];
function Contents() {
  return (
    <div>
      <MoviesRow
        movies={posterFilm}
        title="NetFlix Originals"
        isNetFlix={true}
      />{" "}
      <MoviesRow movies={posterFilm} title="Trending Movies" />
      <MoviesRow movies={posterFilm} title="Top Rated Movies" />
      <MoviesRow movies={posterFilm} title="Action Movies" />
      <MoviesRow movies={posterFilm} title="Comedy Movies" />
      <MoviesRow movies={posterFilm} title="Horror Movies" />
      <MoviesRow movies={posterFilm} title="Romance Movies" />
      <MoviesRow movies={posterFilm} title="Documentaries Movies" />
    </div>
  );
}

export default Contents;
