import NavBar from "../components/Navbar";

export default function App(Components, pageProps) {
  return (
    <div>
      <NavBar />
      <Components {...pageProps} />
    </div>
  );
}
