import { Signup } from "./Signup"
import { Login } from "./Login" 
import { LogoutLink } from "./LogoutLink"

export function Content() {
  return (
    <div>
      < Signup /> 
      < Login />
      < br/> 
      < LogoutLink />
      <h1>Welcome to React!</h1>
    </div>
  )
}