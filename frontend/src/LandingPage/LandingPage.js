import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="content-left">
          <h1>Welcome to Chess Party</h1>
          <p>Join Chess Party and play chess with your friends. Create a room and challenge, send your URL link and challenge your skills together! </p>

          <div className="buttons">
            <button className="party-button create-party-button">Create Party</button>
            <button className="party-button join-party-button">Join Party</button>
          </div>
        </div>

        <div className="content-right">
          <img src="landingPageLogo.png" alt="Chess Image" />
        </div>
      </div>

      <div className="steps-section">
        <h2>How it works:</h2>
        <ul>
          <li><span>Step 1: </span> Create a party or join an existing one</li>
          <li><span>Step 2: </span> Select your game mode</li>
          <li><span>Step 3: </span> Invite a friend to play chess with you</li>
        </ul>
      </div>

      <footer>
        <p>Developed by Enes Bahadir Is</p>
        <p>Have fun playing chess!</p>
      </footer>
    </div>
  
  );
}

export default LandingPage;