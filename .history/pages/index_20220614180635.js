// import NavBar from "../components/NavBar";
// import Head from "next/head"
import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";

// const API_KEY = "0e1331b20d67fbee54805fa8269f6848";

export default function Home({ results }) {
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
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4><Link href={`/movies/${movie.id}`}><a key={movie.id}>{movie.original_title}</a></Link></h4>
            </div>
          
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
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
// server side 에서 results를 받아와서 Home 에다가 전달, Home은 위 함수에서 화면에 result array를 화면에 보여주는 것
// page가 유저에게 보여지기 전에 props를 받아오는 function을 만든 거임
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    // return 하는 걸 props로써 page에게 주게 됨
    props: {
      results,
    },
  };
}
