/* Imports */
import React from 'react'

//CSS
import '../css/MemeForm.css';

/**Meme form. Contains inputs to display meme headers and a button to get a new meme image. */
export default function MemeForm(props) {
    return (
        <form id='App_form' onSubmit={ props.handleSubmit }>
        <div id='input_container'>
            <input type='text'
                id='upperInput'
                name='upperHeader'
                className='input'
                value={ props.memeState.upperHeader }
                placeholder='Upper Text'
                onChange={ props.handleChange }>
            </input>
            <input type='text'
                id='bottomInput'
                name='bottomHeader'
                className='input'
                value={ props.memeState.bottomHeader }
                placeholder='Bottom Text'
                onChange={ props.handleChange }> 
            </input>
        </div>

        <button className='submit_button bg-gradient-purple'>Get a New Meme Image 🖼️</button>
    </form>
    );
}