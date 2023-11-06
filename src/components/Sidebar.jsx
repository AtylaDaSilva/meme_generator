/* Imports */
import { React } from 'react';

//Components
import MemeCard from '../components/MemeCard';
import TextSidebarComponent from '../components/TextSidebarComponent';
import ImageSidebarComponent from '../components/ImageSidebarComponent';

//CSS
import '../css/Sidebar.css';

export default function Sidebar(props) {
    return (
        <div
            id='nav-sidebar'
            className='d-flex flex-column flex-shrink-0 align-items-center bg-purple-dark'
        >
            <ul className="nav nav-flush mb-auto flex-column">
                <TextSidebarComponent />
                <ImageSidebarComponent memesArray={props.memesArray} callbacks={ props.callbacks } />
            </ul>
        </div>
    );
}