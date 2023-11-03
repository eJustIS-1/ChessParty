import React, { useState } from 'react';
import './CreateParty.css';
import { Link } from 'react-router-dom'; 



function CreateParty() {
  const [roomName, setRoomName] = useState('');
  const [nickname, setNickname] = useState('');
  const [gameMode, setGameMode] = useState('Regular Chess');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server or handle it locally
  };

  return (
    <div className='create-party'>
      <div className="content">
        <div className="content-left">
          <h1>Create a New Party</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Room Name:
              <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
            </label>
            <label>
              Your Nickname:
              <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </label>
            <label>
              Game Mode:
              <select value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
                <option value="Regular Chess">Regular Chess</option>
                <option value="Chess960">Chess960</option>
              </select>
            </label>
            <Link to="/rooms/1">
              <button type="submit">Finish creating party</button>
            </Link>
          </form>
        </div>

        {/* <div className="content-right">
            <img src="logo192.png" alt="Chess Image2" />
        </div> */}
      </div>
    </div>

  );
}

export default CreateParty;