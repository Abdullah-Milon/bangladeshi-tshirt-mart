import React, { useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import './Grandpa.css'
import { createContext } from 'react';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>This is GrandPa</h2>
            <p>Has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Anty ring={ring}></Anty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export
 * 2. Create a provider and pass a value
 * 3. use useContext to recive  
 *  **/