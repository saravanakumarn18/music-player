

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
    // {
    //   title: "Tango Del Fuego",
    //   artist: "Parov Stelar",
    //   img_src: "./images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
    //   src: "./music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
    // },
    // {
    //   title: "Take You Dancing",
    //   artist: "Jason Derulo",
    //   img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
    //   src: "./music/JasonDerulo-TakeYouDancing.mp3",
    // },
    // {
    //   title: "Daisy",
    //   artist: "Ashnikko",
    //   img_src: "./images/Ashnikko-Daisy.jpg",
    //   src: "./music/Ashnikko-Daisy.mp3",
    // },
    // {
    //   title: "Dolly Song",
    //   artist: "Partz Grimbad",
    //   img_src: "./images/PatzGrimbard-DollySong.jpg",
    //   src: "./music/PatzGrimbard-DollySong.mp3",
    // },
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