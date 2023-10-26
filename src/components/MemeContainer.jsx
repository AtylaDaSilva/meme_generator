/* Imports */
import React from 'react';

//CSS
import '../css/MemeContainer.css';

/**Meme image container. Displays the meme image and the text (if any) inserted in the inputs inside MemeForm.*/
export default function MemeContainer(props) {
    return (
        <div id='meme_container'>
            <span
                id='upperMemeHeader'
                className='memeHeader'
            > { props.memeState.upperHeader } </span>
          <img
            id='meme'
            className='contain_image'
            src={ props.memeState.memeURL }
            alt='Meme Image'
          ></img>
          <span
            id='bottomMemeHeader'
            className='memeHeader'
          >{ props.memeState.bottomHeader }</span>
        </div>
    );
}