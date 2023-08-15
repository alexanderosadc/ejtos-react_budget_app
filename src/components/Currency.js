import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) =>{

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-success'>
            <span style={{color:"white"}}>Currency: </span>
                <select style={{ marginLeft: '1rem' , size: 10}} id="currency" defaultValue={currency} onChange={changeCurrency}>
                    <option value="$"> $ Dollar</option>
                    <option value="£"> £ Pound</option>
                    <option value="€"> € Euro</option>
                    <option value="₹"> ₹ Ruppee</option>
                </select>
             
           
        </div>
    );
};

export default Currency;