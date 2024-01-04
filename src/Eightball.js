import { React, useState } from 'react';
import { randomAns } from './functions';
import Answers from './answers';
import './Eightball.css';

const Eightball = () => {
    const [answer, setAnswer] = useState(randomAns(Answers));
    const [def, setDefault] = useState(true);

    const handleClick = () => {
        setAnswer(randomAns(Answers));
        setDefault(false);
    }

    return (
        <div className="eightball">
            <h1>Eightball</h1>
            <h3>Think of a question and click the button below!</h3>
            <div className="eightball-text" style={def ? {backgroundColor: "black"} : {backgroundColor: answer.color}}>
                <p className='eightball-answer'>{def ? "I can answer anything!" : `${answer.msg}`}</p>
            </div>
            <button className='eightball-button' onClick={handleClick}>{def ? "Ask Your Question" : "Ask Again"}</button>
            <button className='eightball-reset' onClick={() => setDefault(true)}>Reset</button>
        </div>
    );
}


export default Eightball;