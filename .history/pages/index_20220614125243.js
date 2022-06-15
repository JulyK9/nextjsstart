// import NavBar from "../components/NavBar";
// import Head from "next/head"
import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";

// const API_KEY = "0e1331b20d67fbee54805fa8269f6848";

export default function Home({results}) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(
  //         // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //         `/api/movies`
  //       )
  //     ).json();
  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이 function은 server side 에서만 실행됨
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {  // return 하는 걸 props로써 page에게 주게 됨
    props: {
      results,
    }
  }
}