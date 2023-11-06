/* Imports */
import { React } from 'react';

//CSS
import '../css/MemeCard.css';

export default function MemeCard(props) {
    const { memeData } = props;
    return (
        <div className="MemeCard d-flex my-3">
            <div className="MemeCardHeader d-flex align-center">
                <img
                    className='img-fluid img-thumbnail flex-grow-1'
                    src={memeData.url}
                    alt={memeData.name}
                    onClick={ props.handleClick }
                />
            </div>
            <div className="MemeCardBody d-flex flex-column justify-content-around">
                <h3 className='card-header'>{ memeData.name }</h3>
                <h3 className='card-header'>{memeData.width} X { memeData.height }</h3>
                <h3 className='card-header'>{ memeData.box_count } Boxes</h3>
            </div>
        </div>
    );
}