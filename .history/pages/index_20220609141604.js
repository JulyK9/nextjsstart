import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <style jsx>{`
        a {
          background-color: blue;
        }
      `}</style>
    </div>
  )
}