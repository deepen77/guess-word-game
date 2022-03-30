import React, { useState, useEffect } from 'react'
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import { Fade } from "react-awesome-reveal";
import {words} from "./components/data-words"

let selectedWord = words[Math.floor(Math.random() * words.length)];
//console.log(selectedWord)



function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])


  const keyboard = "abcdefghijklmnopqrstuvwxyz"


  function handleGuess(e) {
    const key = e.target.value;
    if (playable && key) {
      const letter = key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((curr) => [...curr, letter]);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((curr) => [...curr, letter]);
        }
      }
    }
  }


  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      console.log(key, keyCode);
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((curr) => [...curr, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((curr) => [...curr, letter]);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Fade duration={1500}>
          <Figure wrongLetters={wrongLetters} />

          <WrongLetters wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </Fade>
      </div>
      <div className="keyboard">
        {keyboard.split("").map((letter) => (
          <button
            className="keyboard-key"
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={
              correctLetters.includes(letter) || wrongLetters.includes(letter)
                ? true
                : false
            }
          >
            {letter}
          </button>
        ))}
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
}

export default App;