/* Imports */
import { useState, useEffect } from 'react';

//Components
import Header from './components/Header';
import MemeForm from './components/MemeForm';
import MemeContainer from './components/MemeContainer';

//CSS
import './css/App.css';

/** Meme Generator.
 * Fetches an array of memes from "https://api.imgflip.com/get_memes" and displays a pseudo-random meme from that array. Also allows the user to type in some text as meme headers.*/
function App() {
  /**Updates State when any change happens in one of the form inputs */
  function handleChange(event) { 
    const { name, value } = event.target;
    
    setMemeState(currentState => {
      return ({
        ...currentState,
        [name]: value
      });
    });
  }

  /**Handles form submissions */
  function handleSubmit(event) { 
    event.preventDefault();

    setMemeState(currentState => { 
      return ({
        ...currentState,
        memeURL: getRandomMemeURL(memesArray)
      });
    });
  }

  /**Returns a pseudo-random url from memesArray, assuming that memesArray is an array of objects and each object in that array contains a 'url' property.*/
  function getRandomMemeURL(memesArray) { 
    return memesArray[Math.floor(Math.random() * memesArray.length)].url;
  }

  /* State */
  const [memesArray, setMemesArray] = useState([]);
  const [memeState, setMemeState] = useState({
    upperHeader: "",
    bottomHeader: "",
    memeURL: ""
  });

  /* Side-Effects */
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        setMemesArray(response.data.memes);
        setMemeState(currentState => {
          return {
            ...currentState,
            memeURL: getRandomMemeURL(response.data.memes)
          }
        });
      });
  }, []);
  
  /* Render */
  return (
    <div className="App">
      <Header />

      <div className='App_body'>
        <MemeForm
          memeState={ memeState }
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
        />

        <MemeContainer
          memeState={ memeState }
        />
      </div>
    </div>
  );
}

export default App;
