/* Imports */
import { useState, useEffect } from 'react';

//Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MemeContainer from './components/MemeContainer';

//CSS
import './css/App.css';

/** Meme Generator.
 * Fetches an array of memes from "https://api.imgflip.com/get_memes" and displays a pseudo-random meme from that array. Also allows the user to type in some text as meme headers.*/
function App() {
  /**Updates State when any change happens in one of the form inputs */
  function handleChange(event) { //============================ LEGACY
    const { name, value } = event.target;
    
    setMemeState(currentState => {
      return ({
        ...currentState,
        [name]: value
      });
    });
  }

  /**Handles form submissions */
  function handleSubmit(event) { //============================ LEGACY
    event.preventDefault();

    setMemeState(currentState => { 
      return ({
        ...currentState,
        memeURL: getRandomMemeURL(memesArray)
      });
    });
  }

  function handleMemeSelectorChange(event) {
    const newURL = event.target.value;

    if (newURL) { 
      setMemeState(currentState => { 
        return ({
          ...currentState,
          memeURL: newURL
        })
      })
    }
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

  /**
   * Makes an API call to 'https://api.imgflip.com/get_memes' and saves the response to session storage. Also updates state for memesArray and memesState with the response from the API call.
  */
  useEffect(() => {
    //Check if the response from the API call is stored in session storage
    if (sessionStorage.getItem('memes') == null) {
      //Make an API call
      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
          //Save response in session storage
          sessionStorage.setItem('memes', JSON.stringify(response.data.memes));

          //Update state
          setMemesArray(response.data.memes);
          setMemeState(currentState => {
            return {
              ...currentState,
              memeURL: getRandomMemeURL(response.data.memes)
            }
          });
        });
    } else { 
      //Get response from session storage
      const memes = JSON.parse(sessionStorage.getItem('memes'));
      
      //Update state
      setMemesArray(memes);
      setMemeState(currentState => { 
        return {
          ...currentState,
          memeURL: getRandomMemeURL(memes)
        }
      })
    }
  }, []);
  
  /* Render */
  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>

      <div className='App-body d-flex align-items-center justify-content-start'>
        <Sidebar memesArray={memesArray} callbacks={{setMemeState, handleMemeSelectorChange, getRandomMemeURL}} />

        <div className='main-content flex-grow-1 d-flex justify-content-center'>
          <MemeContainer
            memeState={memeState}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
