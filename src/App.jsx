import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Linkedin from "./assets/icon/linkedin.svg";
import Github from "./assets/icon/github.svg";
import Card from "./components/Card";
import image01 from "./assets/frontendmentor/advice-generator-app-main.jpg"
import image02 from "./assets/frontendmentor/blog-preview-card-main.jpg"
import image03 from "./assets/frontendmentor/chat-app-css-illustration-master.jpg"
import image04 from "./assets/frontendmentor/clipboard-landing-page-master.jpg"
import image05 from "./assets/frontendmentor/contact-form-main.jpg"
import image06 from "./assets/frontendmentor/faq-accordion-main.jpg"
import image07 from "./assets/frontendmentor/fylo-data-storage-component-master.jpg"
import image08 from "./assets/frontendmentor/fylo-landing-page-with-two-column-layout-master.jpg"
import image09 from "./assets/frontendmentor/interactive-rating-component-main.jpg"
import image10 from "./assets/frontendmentor/intro-component-with-signup-form-master.jpg"
import image11 from "./assets/frontendmentor/ip-address-tracker-master.jpg"
import image12 from "./assets/frontendmentor/loopstudios-landing-page-main.jpg"
import image13 from "./assets/frontendmentor/newsletter-sign-up-with-success-message-main.jpg"
import image14 from "./assets/frontendmentor/nft-preview-card-component-main.jpg"
import image15 from "./assets/frontendmentor/order-summary-component-main.jpg"
import image16 from "./assets/frontendmentor/product-preview-card-component-main.jpg"
import image17 from "./assets/frontendmentor/qr-code-component-main.jpg"
import image18 from "./assets/frontendmentor/recipe-page-main.jpg"
import image19 from "./assets/frontendmentor/results-summary-component-main.jpg"
import image20 from "./assets/frontendmentor/room-homepage-master.jpg"
import image21 from "./assets/frontendmentor/social-links-profile-main.jpg"
import image22 from "./assets/frontendmentor/social-proof-section-master.jpg"
import image23 from "./assets/frontendmentor/space-tourism-website-main.png"
import image24 from "./assets/frontendmentor/testimonials-grid-section-main.jpg"


function App() {
  const firstName = "CHAITHAWAT";
  const lastName = "PINSUWAN";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayed, setDisplayed] = useState("");
  const images = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24

  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  // Manually set the width value
  const width = 3000; // Adjust this value according to your needs

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
  
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <>
      <main > 
        <div className='circle'></div>
        <div className='content'>
          <div className='top'>
            <motion.h1 className='name'>CHAITHAWAT<br/>PINSUWAN</motion.h1>
            <div className="icon-link"> 
              <a href="https://www.linkedin.com/in/chaithawat/" target="https://www.linkedin.com/in/chaithawat/"><img className="icon" src={Linkedin} alt="Linkedin" /></a>
              <a href="https://github.com/chaithawat21" target="https://github.com/chaithawat21"><img className="icon" src={Github} alt="Github" /></a>
            </div>
          </div>
          <div className="middle">
          <h2 className="frontendmentor">Fontend Mentor</h2>
          <motion.div
            className="container-cards"
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {images.map((item, idx) => (
              <Card image={item} identifier={idx} key={idx} />
            ))}
          </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
