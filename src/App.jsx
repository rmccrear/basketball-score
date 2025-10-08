import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  // 3 pointer
  function threePointShot() {
    setScore(score+3)
  }
  // 2 point shot
  function twoPointShot() {
    setScore(score+2)
  }

  // free throw
  function freeThrow() {
    setScore(score+1)
  }

  function resetScore() {
    // score = 0;
    // updateScreen();
    setScore(0)
  }


  return (
    <>
      <h1 className="score-board" style={headerStyle}>Basketball Score {score}</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button type="button" className="btn btn-primary"  onClick={freeThrow}>Free Throw</button>
        <button type="button" className="btn btn-info"     onClick={twoPointShot}>Two Point Shot</button>
        <button type="button" className="btn btn-warning"  onClick={threePointShot}>Three Pointer</button>
        <button type="button" className="btn btn-danger"   onClick={resetScore}>Reset Score</button>
      </div>
      <div style={footerStyle}>
        Score: {score}
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
