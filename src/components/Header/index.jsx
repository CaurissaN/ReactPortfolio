import React, {useContext} from "react";
import AppContext from "../../App"

function Header() {

    const { page, setPage } = useContext(AppContext)


  return (
    <header>
      <h1>Caurissa Nevy</h1>
      <nav>
        <li onClick={setPage("About")}>About</li>
        <li onClick={setPage("Portfolio")}>Portfolio</li>
        <li onClick={setPage("Resume")}>Resume</li>
        <li onClick={setPage("Contact")}>Contact</li>
      </nav>
    </header>
  )
}

export default Header
