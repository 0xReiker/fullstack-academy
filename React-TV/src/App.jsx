import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails key={selectedShow?.name} show={selectedShow} />
      </main>
    </>
  );
}
