import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const App = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [position, setPosition] = useState({ x: 30, y: 30 });
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState("Awwww");

  function getRandomPosition() {
    // Get the viewport dimensions
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Set the maximum allowed position based on the viewport dimensions
    var maxPositionX = viewportWidth * 0.1; // Adjust as needed
    var maxPositionY = viewportHeight * 0.1; // Adjust as needed

    // Generate random position values within the maximum allowed range
    var positionX = Math.floor(Math.random() * maxPositionX);
    var positionY = Math.floor(Math.random() * maxPositionY);

    return { x: positionX, y: positionY };
  }

  const handleYes = () => {
    setIsExploding(!isExploding);
    getQuote()
    setTimeout(() => {
      setIsExploding(false);
      setShowModal(true);
    }, 1800);
  };

  const handleNo = () => {
    setPosition(() => getRandomPosition())
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [password, setPassword] = React.useState("")
  useState(() => {
    setPassword(() => prompt("ENTER PASSWORD", "Bhai Rehne De Tu, Tere Liye Nahi Hai"))
    console.log(password);

  }, [])

  if (password.toLowerCase().trim() !== process.env.REACT_APP_PASSWORD) {
    return (
      <div className='flex justify-center items-center h-screen font-semibold text-3xl'>
        Loading ...
      </div>
    )
  }

  const getQuote = async () => {
    const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=love';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4f68bc2c2mshe608a930ef4fc28p185c1djsn645ce3f43579',
		'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setQuote(result[0].quote)
} catch (error) {
	console.error(error);
}
  }


  return (
    <>
      <div className="flex justify-center h-screen items-center bg-black font-mono">
        <div className="flex justify-center flex-col items-center  space-y-14">
          <h1 className="text-5xl text-white font-bold underline mx-auto px-14">Do You Love Sourav Mishra?</h1>

          <div className="space-x-6 text-2xl text-white m-4">
            <button
              onClick={handleNo}
              style={{
                left: `${position.x}%`,
                bottom: `${position.y}%`,
              }}
              className="absolute bg-black/50 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group duration-300"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">NO</span>
            </button>

            <button
              onClick={handleYes}
              className="absolute left-[50%] bottom-[30%] bg-black/50 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">YES</span>
              {isExploding && <ConfettiExplosion className="" particleCount={200} particleSize={15} duration={3000} force={0.8} width={1600} height={2200} />}
            </button>


          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-80"></div>
          <div className="relative bg-white rounded-lg p-8">
            <h2 className="text-3xl text-gray-800  mb-4">Sourav Mishra Loves You Too ❤️😘</h2>
            <p className="text-lg font-semibold text-gray-600 mb-4">{quote}!</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-0.5 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>

  );
};

export default App;
