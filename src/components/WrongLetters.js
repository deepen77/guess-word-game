import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return (
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && (
            <p className="invalidLetters">Invalid letters:</p>
          )}
          {wrongLetters.map((letter, i) => (
            <span className="wrongLetter" key={i}>{`${letter}`}</span>
          ))}
        </div>
      </div>
    );
}

export default WrongLetters
