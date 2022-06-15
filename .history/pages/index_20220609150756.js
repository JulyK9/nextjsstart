import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}