import Userdata from "./userdata";
import { useState, useRef } from "react";

function Header() {
    const [message, setMessage] = useState("");
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

    return (
        <header className="relative flex items-center justify-center h-screen">
            <Userdata />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-300 via-transparent to-pink-900 blur-2xl"></div>
            <div className="relative z-10 text-black text-3xl font-bold text-center">
                <h3 className="text-2xl font-serif font-bold">Do You Love Me?</h3>
                <div className="flex gap-4 mt-10 justify-center relative">
                    <button 
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full cursor-pointer border-4 border-pink-700 text-lg shadow-lg transition-transform transform hover:scale-110"
                        onClick={() => setMessage("I love you too! ❤️")}
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
                {message && <p className="mt-5 text-xl text-pink-700 font-semibold">{message}</p>}
            </div>
        </header>
    );
}

export default Header;
