import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const App = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [position, setPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Generate a random number between 0 and (max - min)
    var randomNumber = Math.floor(Math.random() * (max - min + 1));
    // Add min to the random number to get a value between min and max
    var randomInteger = randomNumber + min;
    return randomInteger;
  }

  const handleYes = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
      setShowModal(true);
    }, 3000);
  };

  const handleNo = () => {
    setPosition(getRandomInteger(-100, 100));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [password, setPassword] = React.useState("")
  useState(() => {
    setPassword(() => prompt("ENTER PASSWORD", "f"))
    console.log(password);
    
  }, [])
  
  if (password.toLowerCase() !== 'iloveyou') {
    return (
      <div className='flex justify-center items-center h-screen font-semibold text-3xl'>
        Loading ...
      </div>
    )
  }


  return (
    <>
      <div className="flex justify-center h-screen items-center bg-black font-mono">
        <div className="flex flex-col items-center space-y-14">
          <h1 className="text-5xl text-white font-bold underline m-14">Do You Love Sourav Mishra?</h1>

          <div className="flex space-x-6 text-2xl text-white m-4">
            <button
              onClick={handleNo}
              style={{
                left: `${position}%`,
                top: `${position}%`,
              }}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
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
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">YES</span>
              {isExploding && <ConfettiExplosion className="" particleCount={500} particleSize={15} duration={3000} force={0.8} width={1600} height={1600} />}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-80"></div>
          <div className="relative bg-white rounded-lg p-8">
            <h2 className="text-3xl text-gray-800  mb-4">I Love You Too ❤️😘</h2>
            <p className="text-lg font-semibold text-gray-600 mb-4">Aww!</p>
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
