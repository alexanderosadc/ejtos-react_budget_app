import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [val, setVal] = useState("");
    const [prevValue, setPrevVal] = useState("")
    const upperLimit = 20000
    const valueStep = 10

    const handleChangeBudget = (event) => {
        if (event.target.value > upperLimit){
            alert("Introduced value exceeds 20000")
            event.target.value = prevValue
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        setPrevVal(event.target.value)
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input max={upperLimit} step={valueStep} type='number' pattern='[0-9]' defaultValue={budget} onChange={(event) => {
                setVal((v) => (event.target.validity.valid ? event.target.value : v))
                setVal((v) => (event.target.value < 20000 ? event.target.value : v))
                handleChangeBudget(event)
            }}></input>
            </span> 
           
        </div>
    );
};

export default Budget;