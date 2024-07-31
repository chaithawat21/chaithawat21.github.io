import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Linkedin from "./assets/icon/linkedin.svg";
import Github from "./assets/icon/github.svg";
import Card from "./components/Card";
import Modal from "./components/Modal";
import ModalGroupProject from "./components/ModalGroupProject";

import advicegeneratorappmain from "./assets/frontendmentor/advice-generator-app-main.jpg"
import blogpreviewcardmain from "./assets/frontendmentor/blog-preview-card-main.jpg"
import chatappcssillustrationmaster from "./assets/frontendmentor/chat-app-css-illustration-master.jpg"
import clipboardlandingpagemaster from "./assets/frontendmentor/clipboard-landing-page-master.jpg"
import contactformmain from "./assets/frontendmentor/contact-form-main.jpg"
import ecommerceproductpagemain from "./assets/frontendmentor/ecommerce-product-page-main.jpg"
import faqaccordionmain from "./assets/frontendmentor/faq-accordion-main.jpg"
import fylodatastoragecomponentmaster from "./assets/frontendmentor/fylo-data-storage-component-master.jpg"
import fylolandingpagewithtwocolumnlayoutmaster from "./assets/frontendmentor/fylo-landing-page-with-two-column-layout-master.jpg"
import interactiveratingcomponentmain from "./assets/frontendmentor/interactive-rating-component-main.jpg"
import introcomponentwithsignupformmaster from "./assets/frontendmentor/intro-component-with-signup-form-master.jpg"
import ipaddresstrackermaster from "./assets/frontendmentor/ip-address-tracker-master.jpg"
import loopstudioslandingpagemain from "./assets/frontendmentor/loopstudios-landing-page-main.jpg"
import newslettersignupwithsuccessmessagemain from "./assets/frontendmentor/newsletter-sign-up-with-success-message-main.jpg"
import nftpreviewcardcomponentmain from "./assets/frontendmentor/nft-preview-card-component-main.jpg"
import ordersummarycomponentmain from "./assets/frontendmentor/order-summary-component-main.jpg"
import productpreviewcardcomponentmain from "./assets/frontendmentor/product-preview-card-component-main.jpg"
import qrcodecomponentmain from "./assets/frontendmentor/qr-code-component-main.jpg"
import recipepagemain from "./assets/frontendmentor/recipe-page-main.jpg"
import resultssummarycomponentmain from "./assets/frontendmentor/results-summary-component-main.jpg"
import roomhomepagemaster from "./assets/frontendmentor/room-homepage-master.jpg"
import sociallinksprofilemain from "./assets/frontendmentor/social-links-profile-main.jpg"
import socialproofsectionmaster from "./assets/frontendmentor/social-proof-section-master.jpg"
import spacetourismwebsitemain from "./assets/frontendmentor/space-tourism-website-main.png"
import testimonialsgridsectionmain from "./assets/frontendmentor/testimonials-grid-section-main.jpg"
import screenshot from "./assets/o2o/Screenshot05.png"


const imageData =
[
  {
    "id": 1,
    "image": advicegeneratorappmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-advice-generator-app-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-advice-generator-app-main/"
  },
  {
    "id": 2,
    "image": blogpreviewcardmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-blog-preview-card-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-blog-preview-card-main/"
  },
  {
    "id": 3,
    "image": chatappcssillustrationmaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-chat-app-css-illustration-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-chat-app-css-illustration-master/"
  },
  {
    "id": 4,
    "image": clipboardlandingpagemaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-clipboard-landing-page-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-clipboard-landing-page-master/"
  },
  {
    "id": 5,
    "image": contactformmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-contact-form-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-contact-form-main/"
  },
  {
    "id": 6,
    "image": ecommerceproductpagemain,
    "repo": "https://github.com/chaithawat21/frontendmentor-ecommerce-product-page-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-ecommerce-product-page-main/"
  },
  {
    "id": 7,
    "image": faqaccordionmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-faq-accordion-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-faq-accordion-main/"
  },
  {
    "id": 8,
    "image": fylodatastoragecomponentmaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-fylo-data-storage-component-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-fylo-data-storage-component-master/"
  },
  {
    "id": 9,
    "image": fylolandingpagewithtwocolumnlayoutmaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-fylo-landing-page-with-two-column-layout-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-fylo-landing-page-with-two-column-layout-master/"
  },
  {
    "id": 10,
    "image": interactiveratingcomponentmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-interactive-rating-component-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-interactive-rating-component-main/"
  },
  {
    "id": 11,
    "image": introcomponentwithsignupformmaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-intro-component-with-signup-form-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-intro-component-with-signup-form-master/"
  },
  {
    "id": 12,
    "image": ipaddresstrackermaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-ip-address-tracker-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-ip-address-tracker-master/"
  },
  {
    "id": 13,
    "image": loopstudioslandingpagemain,
    "repo": "https://github.com/chaithawat21/frontendmentor-loopstudios-landing-page-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-loopstudios-landing-page-main/"
  },
  {
    "id": 14,
    "image": newslettersignupwithsuccessmessagemain,
    "repo": "https://github.com/chaithawat21/frontendmentor-newsletter-sign-up-with-success-message-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-newsletter-sign-up-with-success-message-main/"
  },
  {
    "id": 15,
    "image": nftpreviewcardcomponentmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-nft-preview-card-component-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-nft-preview-card-component-main/"
  },
  {
    "id": 16,
    "image": ordersummarycomponentmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-order-summary-component-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-order-summary-component-main/"
  },
  {
    "id": 17,
    "image": productpreviewcardcomponentmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-product-preview-card-component-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-product-preview-card-component-main/"
  },
  {
    "id": 18,
    "image": qrcodecomponentmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-qr-code-component-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-qr-code-component-main/"
  },
  {
    "id": 19,
    "image": recipepagemain,
    "repo": "https://github.com/chaithawat21/frontendmentor-recipe-page-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-recipe-page-main/"
  },
  {
    "id": 20,
    "image": resultssummarycomponentmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-results-summary-component-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-results-summary-component-main/"
  },
  {
    "id": 21,
    "image": roomhomepagemaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-room-homepage-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-room-homepage-master/"
  },
  {
    "id": 22,
    "image": sociallinksprofilemain,
    "repo": "https://github.com/chaithawat21/frontendmentor-social-links-profile-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-social-links-profile-main/"
  },
  {
    "id": 23,
    "image": socialproofsectionmaster,
    "repo": "https://github.com/chaithawat21/frontendmentor-social-proof-section-master",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-social-proof-section-master/"
  },
  {
    "id": 24,
    "image": spacetourismwebsitemain,
    "repo": "https://github.com/chaithawat21/frontendmentor-space-tourism-website-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-space-tourism-website-main/"
  },
  {
    "id": 25,
    "image": testimonialsgridsectionmain,
    "repo": "https://github.com/chaithawat21/frontendmentor-testimonials-grid-section-main",
    "liveSite": "https://chaithawat21.github.io/frontendmentor-testimonials-grid-section-main/"
  }
]

function App() {
  const firstName = "CHAITHAWAT";
  const lastName = "PINSUWAN";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayed, setDisplayed] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);


  const FAST_DURATION = 50;
  const SLOW_DURATION = 100;

  const [duration, setDuration] = useState(FAST_DURATION);
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const imageWidth = 180; // Adjust this value according to your needs
  const containerWidth = imageWidth * imageData.length;

  useEffect(() => {
    const animateLetter = (index, name, isLastName = false) => {
      if (index >= name.length) {
        if (!isLastName) {
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

    setDisplayed(firstName.replace(/[^ ]/g, ' '));
    animateLetter(0, firstName);
  }, []);

  useEffect(() => {
    let controls;
    const finalPosition = -containerWidth; // Move through the entire container width

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
  }, [rerender, xTranslation, duration, containerWidth]);

  const handleCardClick = (identifier) => {
    setSelectedCard(imageData.find(card => card.id === identifier));
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setSelectedGroupProject(false)
  };
  const [selectedGroupProject, setSelectedGroupProject] = useState(false);
  const handleGroupClick = () => {
    setSelectedGroupProject(true)
  }

  return (
    <>
      <main>
        <div className='circle'></div>
        <div className='content'>
          <div className='top'>
            <div className="top-name">
            <motion.h1 className='name'>{displayed}</motion.h1>
            <p className="name-detail">I'm UI/UX Design and Front End Developer.</p>
            </div>
            <div className="icon-link">
              <a href="https://www.linkedin.com/in/chaithawat/" target="_blank" >
                <img className="icon" src={Linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/chaithawat21" target="_blank" >
                <img className="icon" src={Github} alt="Github" />
              </a>
              <a className="resume" href="https://docs.google.com/document/d/15YN51S1UoHOaM3tuW_HcXi5NQvi1B0oRZ2uog6Aymas/edit" target="_blank">RESUME</a>
            </div>
          </div>
          <div className="middle">
            <h2 className="o2o">
            <a href="https://o2o-project.vercel.app" target="_blank">O2O Project</a>
            </h2>
            <img className="o2o-img" src={screenshot} alt="screenshot" onClick={handleGroupClick}/>
            {selectedGroupProject && <ModalGroupProject onClose={handleCloseModal} />}
            <ul className="o2o-list">
              <li ><a className="o2o-text" href="https://www.figma.com/design/1Ouaz0a9aK67HJkwLVG9yo/O2O-Project?node-id=0-1&t=ckgzmrYSVuBM0NFr-1" target="_blank">FIGMA</a></li>
              <li ><a className="o2o-text" href="https://github.com/chaithawat21/o2o-frontend" target="_blank">REPOSITORY(Frontend)</a></li>
              <li ><a className="o2o-text" href="https://github.com/chaithawat21/o2o-backend" target="_blank">REPOSITORY(Backend)</a></li>
            </ul>
            <h2 className="frontendmentor">
              <a href="https://www.frontendmentor.io/profile/chaithawat21" target="_blank">Frontend Mentor</a>
            </h2>
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
              {imageData.map(card => (
                <Card
                  key={card.id}
                  identifier={card.id}
                  image={card.image}
                  repo={card.repo}
                  liveSite={card.liveSite}
                  onClick={handleCardClick}
                />
              ))}
            </motion.div>
          </div>
          <AnimatePresence>
            {selectedCard && (
              <Modal
                image={selectedCard.image}
                repo={selectedCard.repo}
                liveSite={selectedCard.liveSite}
                onClose={handleCloseModal}
              />
            )}

          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default App;
