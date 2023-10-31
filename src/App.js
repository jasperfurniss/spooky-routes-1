import React, { useState } from "react";
import { CircleIconButton, Title } from "playbook-ui";
function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("pumpkins")}>Pumpkins</button>
        <button onClick={() => setPage("costumes")}>Costumes</button>
        <button onClick={() => setPage("candy")}>Candy</button>
      </nav>
      <div>
        {page === "home" && <h1>Welcome to Spooky Hollow!</h1>}
        {page === "pumpkins" && <h1>Carve Your Pumpkin</h1>}
        {page === "costumes" && <h1>Choose Your Costume</h1>}
        {page === "candy" && <h1>Trick or Treat!</h1>}
      </div>
    </div>
  );
}

export default App;
