// import NavBar from "../components/NavBar";
// import Head from "next/head"
// import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const onClick = (id, title) => {
    // router.push(`/movies/${id}`)
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.id}`}>
              <a key={movie.id}>{movie.original_title}</a>
            </Link>
          </h4>
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

// ??? function??? server side ????????? ?????????
// server side ?????? results??? ???????????? Home ????????? ??????, Home??? ??? ???????????? ????????? result array??? ????????? ???????????? ???
// page??? ???????????? ???????????? ?????? props??? ???????????? function??? ?????? ??????
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    // return ?????? ??? props?????? page?????? ?????? ???
    props: {
      results,
    },
  };
}
