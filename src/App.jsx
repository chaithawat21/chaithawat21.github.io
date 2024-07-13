import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Linkedin from "./assets/icon/linkedin.svg"
import Github from "./assets/icon/github.svg"

function App() {
  const firstName = "CHAITHAWAT";
  const lastName = "PINSUWAN";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const animateLetter = (index, name, isLastName = false) => {
      if (index >= name.length) {
        if (!isLastName) {
          // Add space and start animating the last name
          setDisplayed((prev) => prev + " ");
          animateLetter(0, lastName, true);
        }
        return;
      }

      const targetLetter = name[index];
      const targetIndex = alphabet.indexOf(targetLetter);

      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayed((prev) => prev.slice(0, index + (isLastName ? firstName.length + 1 : 0)) + alphabet[currentIndex] + prev.slice(index + (isLastName ? firstName.length + 1 : 0) + 1));
        if (currentIndex === targetIndex) {
          clearInterval(interval);
          animateLetter(index + 1, name, isLastName);
        } else {
          currentIndex++;
        }
      }, 50);
    };

    // Initialize displayed with spaces to prevent undefined characters
    setDisplayed(firstName.replace(/[^ ]/g, ' '));
    animateLetter(0, firstName);
  }, []);
  

return (
    <>
    <main>
      <div className='circle'></div>
      <div className='content'>
      <div className='top'>
      <motion.h1 className='name'>{displayed}</motion.h1>
      <div className="icon-link"> 
        <a href="https://www.linkedin.com/in/chaithawat/"><img className="icon" src={Linkedin} alt="Linkedin" /></a>
        <a href="https://github.com/chaithawat21"><img className="icon" src={Github} alt="Github" /></a>
      </div>
      </div>
      <div className="middle"></div>
      </div>
    </main>
    </>
  )
}

export default App