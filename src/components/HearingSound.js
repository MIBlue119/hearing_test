import React from "react";
import useSound from 'use-sound';
const steps = ["-5", "0", "5", "10", "15", "20", "30", "40", "50", "60", "70" , "80"];

const HearingSound = ({currentIndex}) =>{

    // Dynamically import the sound file
    // https://stackoverflow.com/questions/64317730/how-to-dynamically-import-sound-files-in-react
    const [play] = useSound(require(`../assets/hearingtest_audio/4000/warble_4000_${steps[currentIndex]}.ogg`));
    // const [play] = useSound("https://alexpatterson.dev/sounds/cat_purr.mp3")
    return (
      <div>
        {/* <button onClick={() => play()}>Purr</button> */}
        {play()}
      </div>
    );
};


export default HearingSound;