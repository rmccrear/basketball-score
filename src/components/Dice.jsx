import { useState } from "react"

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}

function DiceFace({ faceValue }) {
    return (<>
        <div style={{ width: "100px", height: "100px", border: "solid black", fontSize: "70px" }}>
            {faceValue}
        </div>
    </>)
}

export default function Dice() {
    const [odds, setOdds] = useState(0);
    // var odds = 0
    const [diceRollsList, setDiceRollsList] = useState([])
    // var diceRollsList = []

    function play() {
        let tempRollsList = []
        let tempOdds = 0;
        setOdds(0);

        // see CSP 2025 Unit 6 Lesson 7 Level 9
        // https://studio.code.org/courses/csp-2025/units/6/lessons/7/levels/9
        for (let i = 0; i < 10; i++) {
            let roll = randomNumber(1, 6)
            // appendItem(tempRollList, roll)
            tempRollsList.push(roll) // append item (A.K.A. push)

            console.log("roll: " + roll)
            if ((roll == 1) || (roll == 3) || (roll == 5)) {
                tempOdds++
            }
        }
        console.log(tempRollsList)
        setDiceRollsList(tempRollsList)
        setOdds(tempOdds)
    }

    let diceDisplay = []
    for (let i = 0; i < diceRollsList.length; i++) {
        let borderValue = "solid black"
        if(diceRollsList[i] === 1 || (diceRollsList[i] === 3) || (diceRollsList[i]===5)) {
            borderValue = "solid red"
        } 
        let diceFace = (
            <div style={{ margin: "2px", width: "100px", height: "100px", border: borderValue, fontSize: "70px" }}>
                {diceRollsList[i]}
            </div>
        )
        diceDisplay.push(diceFace)
    }


    return (<>
        <h3>Odds: {odds}</h3>
        <button className="btn btn-primary" onClick={play}>Play</button>
        <div style={{ display: "flex" }}>
            {diceDisplay}
        </div>
    </>)
}



