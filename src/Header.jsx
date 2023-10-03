import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="/myroutine">My Routine</a>
      </nav>
    </header>
  )
}