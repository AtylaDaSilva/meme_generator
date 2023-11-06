/* Imports */
import React from 'react';

//CSS
import '../css/MemeContainer.css';

/**Meme image container. Displays the meme image and the text (if any) inserted in the inputs inside MemeForm.*/
export default function MemeContainer(props) {
    return (
        <div id='meme_container' className='border-purple-dark rounded'>
          <img
            id='meme'
            className='object-fit-contain'
            src={ props.memeState.memeURL }
            alt='Meme Image'
          ></img>
        </div>
    );
}