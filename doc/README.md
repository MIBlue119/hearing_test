# Development Note

- [How to load audio at reactjs](https://stackoverflow.com/questions/47686345/playing-sound-in-react-js)
    - Use this pkg `npm install use-sound`
    ```javascript
    import useSound from 'use-sound'
    import mySound from '../assets/sounds/yourSound.mp3'

    function MyButton(){
      const [playSound] = useSound(mySound)
    
      return (
        <button onClick={() => playSound()}>
           Play Sound
        </button>
      )
    }
    ```