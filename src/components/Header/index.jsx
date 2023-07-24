import React, { useContext } from "react";
import { AppContext } from "../../App"

function Header() {

    const { setPage } = useContext(AppContext)

    const changePage = (event) => {
      const page = event.target.innerHTML;
      setPage(page)
    }


  return (
    <header>
      <h1>Caurissa Nevy</h1>
      <nav>
        <li onClick={changePage}>About</li>
        <li onClick={changePage}>Portfolio</li>
        <li onClick={changePage}>Resume</li>
        <li onClick={changePage}>Contact</li>
      </nav>
    </header>
  )
}

export default Header
