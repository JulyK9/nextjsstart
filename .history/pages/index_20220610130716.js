// import NavBar from "../components/NavBar";
// import Head from "next/head"
import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "0e1331b20d67fbee54805fa8269f6848";

export default function Home() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(data);
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
