

import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Polakatum Para para",
      artist: "Anirudh",
      img_src: "./images/titaliya.jpg",
      src: "./songs/1.mpeg",
    },
    {
      title: "Selfie Pulla",
      artist: "Anirudh",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./songs/2.mpeg",
    },
    {
      title: "Petta parak",
      artist: "Anirudh",
      img_src: "./images/care-ni-karda.jpg",
      src: "./songs/3.mpeg",
    },
    {
      title: "Mehabooba",
      artist: "yash",
      img_src: "./images/burjkalifa.jpg",
      src: "./songs/4.mpeg",
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;