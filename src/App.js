import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [state, setState] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  }, [])

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    { 
      keyCode: 87,
      text: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    { 
      keyCode: 69,
      text: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    { 
      keyCode: 65,
      text: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    { 
      keyCode: 83,
      text: "S",
      id: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    { 
      keyCode: 68,
      text: "D",
      id: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    { 
      keyCode: 90,
      text: "Z",
      id: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    { 
      keyCode: 88,
      text: "X",
      id: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    { 
      keyCode: 67,
      text: "C",
      id: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },
  ]

  function playSound(selector) {
    const audio = document.getElementById(selector)
    console.log(audio)
    audio.play()
    setState(selector)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{state}</div>
          <div className="drum-pads">
            {drumPads.map((drumPad) => (
              <button className="drum-pad" id={drumPad.src} key={drumPad.src}
                onClick={() => {
                  playSound(drumPad.text)
                }}>
                {drumPad.text}
                <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>
              </button> ))}
          </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
