import React from 'react';
import './Chat.css'
import { Navigate } from 'react-router-dom';

let test: string = "This is a test string for the Chat Page.";
console.log(test);

export default function Page() {
    const buttonStyles: React.CSSProperties = {
        color: 'white',
        backgroundColor: 'orange', // Note the camelCase
        padding: '10px'
    };

    // Navigation function
    const [navigateToHome, setNavigateToHome] = React.useState(false);

    if (navigateToHome) {
        return <Navigate to="/" />;
    }

    return (
        // Use a <div> or a React.Fragment <> instead of <head> in the return block
        <div className="centerbox">
            <h1 className="bighead">This is the heading.</h1>
          <button 
              onClick={() => setNavigateToHome(true)}
              style={buttonStyles}> {/* buttonStyles is now defined in scope */}
              Return Home
          </button>
        </div>
    );
}
