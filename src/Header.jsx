import {LogoutLink} from "./LogoutLink";


export function Header() {
  let authenticationLinks;

  if (localStorage.jwt === undefined) {
    authenticationLinks = (
    <>
    <li class="nav-item">
      <a href="/signup" class="nav-link smoothScroll">Signup</a>
    </li>
     <li class="nav-item">
      <a href="/login" class="nav-link smoothScroll">Login</a>
    </li>
    </>
    )
  } else {
    authenticationLinks =(
    <>
      <li class="nav-item">
        <a href="/myroutine" class="nav-link smoothScroll">My Routine</a>
      </li>
      
    <li class="nav-item">
      <a href="/" class="nav-link smoothScroll"><LogoutLink /></a>
    </li>
    </>
    )
  }

  return (
    <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">

      <a class="navbar-brand" href="/">DontSkip</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-lg-auto">
          <li class="nav-item">
            <a href="/" class="nav-link smoothScroll">Home</a>
          </li>         
          <li class="nav-item">
            <a href="/additions" class="nav-link smoothScroll">More Exercises</a>
          </li>      
          {authenticationLinks}         
        </ul>
      </div>
    </div>
  </nav>   
  )
}