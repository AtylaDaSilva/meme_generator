/* Imports */
import { React } from 'react';

//CSS
import '../css/Header.css';

//Images
import troll_face from '../img/troll_face.png';

/**Header component*/
export default function Header(props) { 
    return (
        <header id='Header' className='bg-gradient-purple'>
            <div id='brand_container'>
                <img src={ troll_face } alt='Troll Face' id='brand_logo' className='inline_block'></img>
                <h1 className='inline_block'>Meme Generator</h1>
            </div>
            <span>React Course - Project 3</span>
        </header>
    );
}