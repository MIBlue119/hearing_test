import React from 'react';
import { useState } from "react";

import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';

import Slider from "./Slider";
import Step from "./Step";
import "./styles.css";

import useSound from 'use-sound';
import testSound from '../assets/hearingtest_audio/4000/warble_4000_40.ogg'

function MyButton(){
    const [playSound] = useSound(testSound)
    
    return (
      <button onClick={() => playSound()}>
         Play Sound
      </button>
    )
}

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const _handleIndexChange = (index) => {
        setCurrentIndex(index);
      };
    
    const _handleNext = (currentIndex) => {
        setCurrentIndex(currentIndex + 1);
      };
    const _handleComplete = () => {};
    

    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
                <div className='column eight wide'>
                    <div className="blockcontainer">
                        <div className="container">
                            <Step currentIndex={currentIndex} />
                        </div>
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </div>
                </div>

                <div>
                    <MyButton/>
                </div>

            </div>
        </div>
    );
}

export default App;