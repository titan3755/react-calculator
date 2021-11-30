import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import '../css/style.css'

const Calculator = (props) => {
    const [display, setDisplay] = useState('')
    const displaySetter = (e) => {
        setDisplay(prev => prev + e.target.name)
    }
    const calculate = () => {
        try {
            let result = evaluate(display)
            setDisplay(String(result))
        }
        catch (e) {
            setDisplay(e.message)
        }
    }
    return (
        <React.Fragment>
            <div className="calculator-back">
                <div className="calculator-main">
                    <div className="calculator">
                        <div className="calculator-display">
                            {display}
                        </div>
                        <div className="calculator-keypad">
                            <button onClick={() => {setDisplay('')}} className="key clear highlight">Clear</button>
                            <button onClick={() => {setDisplay(prev => prev.substring(0, prev.length - 1))}} className="key highlight">Del</button>
                            <button onClick={displaySetter} name="." className="key decimal highlight">&sdot;</button>
                            <button onClick={displaySetter} name=" + " className="key highlight">+</button>
                            <button onClick={displaySetter} name="7" className="key">7</button>
                            <button onClick={displaySetter} name="8" className="key">8</button>
                            <button onClick={displaySetter} name="9" className="key">9</button>
                            <button onClick={displaySetter} name=" - " className="key highlight">&ndash;</button>
                            <button onClick={displaySetter} name="4" className="key">4</button>
                            <button onClick={displaySetter} name="5" className="key">5</button>
                            <button onClick={displaySetter} name="6" className="key">6</button>
                            <button onClick={displaySetter} name=" * " className="key highlight">&times;</button>
                            <button onClick={displaySetter} name="1" className="key">1</button>
                            <button onClick={displaySetter} name="2" className="key">2</button>
                            <button onClick={displaySetter} name="3" className="key">3</button>
                            <button onClick={displaySetter} name=" / " className="key highlight">&divide;</button>
                            <button onClick={displaySetter} name="(" className="key">(</button>
                            <button onClick={displaySetter} name=")" className="key">)</button>
                            <button onClick={displaySetter} name="0" className="key">0</button>
                            <button onClick={calculate} className="key result highlight">=</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Calculator
