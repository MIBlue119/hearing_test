import React from 'react';
import { useState } from "react";

import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';

import Slider from "./Slider";
import Step from "./Step";
import HearingSound from "./HearingSound";
import "./styles.css";



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
                    <div className="blockcontainer">
                        <div className="container">
                            <Step currentIndex={currentIndex} />
                            <HearingSound currentIndex={currentIndex}/>
                        </div>
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;