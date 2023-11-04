import React, { useState } from 'react';
import './Room.css';
import BasicChessBoard from '../Components/ChessBoard/BasicChessBoard.js'; 

export default function Room() {

    return(
        <div className="Room">
            <BasicChessBoard/>
        </div>

    );
    
}




