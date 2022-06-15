// import NavBar from "../components/Navbar";
// import Head from "next/head"
import Seo from "../components/Seo";

const API_KEY = "0e1331b20d67fbee54805fa8269f6848";

export default function Home() {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
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
