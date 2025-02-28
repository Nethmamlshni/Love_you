import Userdata from "./userdata";
import { useState, useRef } from "react";

function Header() {
    const [message, setMessage] = useState("");
    const [showVideo, setShowVideo] = useState(false);
    const noBtnRef = useRef(null);

    // Function to move the button to a random position on mouse hover
    const moveNoButton = () => {
        const button = noBtnRef.current;
        if (button) {
            const maxX = window.innerWidth - 150; // Keeps button inside screen width
            const maxY = window.innerHeight - 100; // Keeps button inside screen height

            // Generate random position
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            // Set the button's new position
            button.style.position = "absolute";
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
            button.style.visibility = "visible"; // Ensure the button remains visible
        }
    };

    // Function to handle "Yes" button click
    const handleYesClick = () => {
        setShowVideo(true);
        setMessage("I love you too! ❤️");
    };

    return (
        <header className="relative flex items-center justify-center h-screen">
            <Userdata />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-300 via-transparent to-pink-900 blur-2xl"></div>
            <div className="relative z-10 text-black text-3xl font-bold text-center">
                {!showVideo && (
                    <>
                        {/* Image above the question */}
                        <img 
                            src="picture/WhatsApp Image 2025-03-01 at 00.19.14.jpeg" 
                            alt="Love Image" 
                            className="w-48 h-48 mx-auto mb-4 rounded-full shadow-lg" 
                        />
                        <h3 className="text-2xl font-serif font-bold">Do You Love Me?</h3>
                        <div className="flex gap-4 mt-10 justify-center relative">
                            <button 
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full cursor-pointer border-4 border-pink-700 text-lg shadow-lg transition-transform transform hover:scale-110"
                                onClick={handleYesClick}
                            >
                                Yes
                            </button>
                            <button 
                                ref={noBtnRef}
                                className="bg-pink-500 text-white font-bold py-3 px-6 rounded-full cursor-pointer border-4 border-pink-700 text-lg shadow-lg transition-transform transform hover:scale-110"
                                onMouseEnter={moveNoButton} // Moves to a new random location on hover
                            >
                                No
                            </button>
                        </div>
                    </>
                )}
                {message && (
                    <p className="text-2xl font-serif font-bold mt-4">{message}</p>
                )}
                {showVideo && (
                    <video 
                        src="picture/WhatsApp Video 2025-03-01 at 00.19.18.mp4" 
                        controls 
                        className="w-64 h-auto mx-auto mb-4 rounded-lg shadow-lg"
                    />
                )}
            </div>
        </header>
    );
}

export default Header;
