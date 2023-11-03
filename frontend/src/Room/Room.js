import React, { useState } from 'react';
import './Room.css';
import 'chessboard-element';
import BasicChessBoard from '../Components/ChessBoard/BasicChessBoard.js';


export default function Room() {

    return(
        <div className="Room">
            <BasicChessBoard/>
        </div>

    );
    
}




