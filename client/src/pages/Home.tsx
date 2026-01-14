import React  from 'react'
import './Home.css'
import { Navigate } from 'react-router-dom';


function Home() {

  // Button styles
  const buttonStyles: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'orange', // Note the camelCase
    padding: '12px',
    margin: '12px',
  };

    // Navigation function
    const [navigateAbout, setNavigateAbout] = React.useState(false);
    const [navigateChat, setNavigateChat] = React.useState(false);

    // Navigation ifs
    if (navigateAbout) {
        return <Navigate to="/about" />;
    }
    if (navigateChat) {
        return <Navigate to="/chat" />;
    }
  return (
    <>
      <head>
        <title>Snord.ai - Home</title>
      </head>
      <div className="centerbox">
        <h1 className="bighead">Welcome to Snord.ai,</h1>
        <h2 className="subhead" style={{margin: '-10px'}}>Where Efficiency And Innovation Take Root</h2>

        <div className="card">
          <button className = "button-left"
              onClick={() => setNavigateAbout(true)}
              style={buttonStyles}> {/* buttonStyles is now defined in scope */}
              Our Story
          </button>
          <button className = "button-right"
              onClick={() => setNavigateChat(true)}
              style={buttonStyles}> {/* buttonStyles is now defined in scope */}
              Our Model
          </button>
        </div>
        <p className="read-the-docs">
          This project is in early beta. Please be kind as we continue to improve!
        </p>
      </div>
    </>
  )
}

export default Home;
