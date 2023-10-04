import {LogoutLink} from "./LogoutLink";

export function Header() {
  let authenticationLinks;

  if (localStorage.jwt === undefined) {
    authenticationLinks = (
    <>
    <a href="/login">Login</a> | <a href="/signup">Sign Up</a>
    
    </>
    )
  } else {
    authenticationLinks =(
    <>
    <a href="/myroutine">My Routine</a> | <LogoutLink />
    </>
    )
  }
  return (
    <header>
      <nav>
        <a href="/">Home</a> | {authenticationLinks}
      </nav>
    </header>
  )
}