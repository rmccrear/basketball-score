import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [score, setScore] = useState(0)

  // 3 pointer
  function threePointShot() {
    setScore(score + 3)
  }
  // 2 point shot
  function twoPointShot() {
    setScore(score + 2)
  }

  // free throw
  function freeThrow() {
    setScore(score + 1)
  }

  function resetScore() {
    // score = 0;
    // updateScreen();
    setScore(0)
  }

  let winElement;
  if (score > 100) {
    winElement = <h1> You Win!</h1>
  } else {
    winElement = <h1> Keep trying </h1>
  }

  return (
    <>
      <div className="container">
        <h1 className="score-board" style={headerStyle}>Basketball Score {score}</h1>
        {winElement}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button type="button" className="btn btn-primary" onClick={freeThrow}>Free Throw</button>
          <button type="button" className="btn btn-info" onClick={twoPointShot}>Two Point Shot</button>
          <button type="button" className="btn btn-warning" onClick={threePointShot}>Three Pointer</button>
          <button type="button" className="btn btn-danger" onClick={resetScore}>Reset Score</button>
        </div>
        <div style={{ fontSize: score, color: score < 100 ? "black" : "red" }}>
          Score: {score}
          <br />
          {
            score < 100 ? <h2>Keep Working</h2> : <h2>Congratulations</h2>
          }
        </div>
        <div style={footerStyle}>
          Score: {score}
        </div>

        <br />
        <h2>Care to play dice?</h2>
        <Dice />
      </div>
    </>
  )
}

const headerStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "1em"
}

const footerStyle = {
  textAlign: "center",
  fontSize: "small",
  padding: "3em"
}

export default App
