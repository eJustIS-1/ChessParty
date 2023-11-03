import React, { useState } from 'react';
import './Room.css';
import 'chessboard-element';


import ChessBoard from '../Components/ChessBoard/ChessBoard';



function Room() {

    return(
        <div id="root"><ChessBoard /></div>
    )
}


export default Room;