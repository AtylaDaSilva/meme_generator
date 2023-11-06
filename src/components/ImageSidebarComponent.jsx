import { React } from 'react';
import * as fr from '../fileReader';

export default function ImageSidebarComponent(props) {
    const { setMemeState, handleMemeSelectorChange, getRandomMemeURL } = props.callbacks;
    return (
        <li>
            <a
                href="#sidebar-offcanvas-image"
                data-bs-toggle='offcanvas'
                aria-controls='sidebar-offcanvas-image'
                className='nav-link py-3 border-bottom'
                role='button'
            >
                <svg
                    id='sidebar-btn-image'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffff"
                    className="bi bi-image"
                    viewBox="0 0 16 16"
                >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
            </a>
            <div
                id='sidebar-offcanvas-image'
                className="offcanvas offcanvas-start"
            >
                <div className="offcanvas-header">
                    <h2 className='offcanvas-title'>Image Tools</h2>
                </div>
                <div className="offcanvas-body">
                    <div className="memeSelector">
                        <h3 className='offcanvas-title'>Image Selector</h3>
                        <select
                            name="memeSelector"
                            id="memeSelector"
                            className="form-select"
                            aria-label='Meme Selector'
                            onChange={ handleMemeSelectorChange }
                        >
                            <option value="">-Select a Meme-</option>
                            { props.memesArray.map((meme, index) => { 
                                return (<option key={index} value={meme.url}>{ meme.name }</option>)
                            }) }
                        </select>

                        <button
                            type='button'
                            className='btn btn-primary my-3 bg-gradient-purple border-purple-dark'
                            onClick={() => {
                                setMemeState(currentState => {
                                    return {
                                        ...currentState,
                                        memeURL: getRandomMemeURL(props.memesArray)
                                    }
                                })
                            } }
                        >Select a Random Meme 🖼️</button>

                        <hr />

                        <label htmlFor="importMeme" className='formFile'>Import Your Own Meme</label>
                        <input
                            type="file"
                            name="importMeme"
                            id="importMeme"
                            className='form-control'
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                const file = event.target.files[0];

                                fr.saveFileContents(file);
                            } }
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}