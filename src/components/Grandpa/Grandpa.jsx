import React from 'react';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2>This is GrandPa</h2>
            <section className='flex'>
                <Father ring = {ring}></Father>
                <Uncle></Uncle>
                <Anty ring= {ring}></Anty>
            </section>
        </div>
    );
};

export default Grandpa;