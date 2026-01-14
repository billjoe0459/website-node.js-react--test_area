import React from 'react';
import './About.css'
import { Navigate } from 'react-router-dom';

let test: string = "This is a test string for the About Page.";
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
        <head>
            <title>Snord.ai - About</title>
        </head>
            <h1 className="bighead">The Innovations of Snord.ai</h1>
            <p className="description">
                Snord ai is a cutting-edge platform designed to revolutionize the way users interact with AI technology. 
                    <br /> 
                Our mission is to provide an intuitive and efficient experience that empowers users to harness the full potential of artificial intelligence.
            </p>
            <p className="description">
                At Snord ai, we believe in efficiency and in the success of low power architectures,
                    <br />
                creating solutions that are as powerful as the competition,
                yet can run on a server the size for your hand (credit to NVIDIA).
            </p>
            <p className="description">
                Our team has worked tirelessly to develop a system that is not only easy to deploy,
                    <br />
                but also delivers unparalleled experience in terms of speed and reliability.
            </p>
            <p className="description">
                Snord ai was built with the web in mind from day one,
                    <br />
                so instead of the ai building for the web, we built with the web,
                    <br />
                allowing us to bring developers like you the best experience possible.
            </p>
            <p className="read-the-docs">
                This project is in early beta. Please be kind as we continue to improve! <br /> You can contact us at snordai.help@snord.ai (not real email). 
            </p>
          <button 
              onClick={() => setNavigateToHome(true)}
              style={buttonStyles}> {/* buttonStyles is now defined in scope */}
              Return Home
          </button>
        </div>
    );
}
