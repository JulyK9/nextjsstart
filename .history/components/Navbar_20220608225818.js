import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a className="hello">Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
