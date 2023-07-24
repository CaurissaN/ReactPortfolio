import React, { useState, createContext } from "react";
import './App.css';
import Header from "./components/Header"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"


export const AppContext = createContext()

function App() {
  const [page, setPage] = useState("About")

  const renderPage = () => {
    if (page === "About") {
      return <About />
    }
    if (page === "Portfolio") {
      return <Portfolio />
    }
    if (page === "Resume") {
      return <Resume />
    }
    if (page === "Contact") {
      return <Contact />
    }
  }


  return (
    <div className="App">
      <AppContext.Provider
        value={{setPage }}
      >
        <Header />
        <main>
        {renderPage()}
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
