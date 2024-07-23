import { AnimatePresence, motion } from "framer-motion";
import React, {useState} from "react";
import page01 from '../assets/o2o/page01.png'
import page02 from '../assets/o2o/page02.png'
import page02a from '../assets/o2o/page02a.png'
import page03 from '../assets/o2o/page03.png'
import page03a from '../assets/o2o/page03a.png'
import page03b from '../assets/o2o/page03b.png'
import page04 from '../assets/o2o/page04.png'
import page04a from '../assets/o2o/page04a.png'
import page05 from '../assets/o2o/page05.png'
import page06 from '../assets/o2o/page06.png'
import page07 from '../assets/o2o/page07.png'
import page08 from '../assets/o2o/page08.png'
import page08a from '../assets/o2o/page08a.png'
import page08b from '../assets/o2o/page08b.png'


const pages = [
    page01, page02, page02a, page03, page03a, page03b, page04, page04a, page05, page06, page07, page08, page08a, page08b
]

const ModalGroupProject = ({ onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
    };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-o2o-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        
        <img className="modal-image" src={pages[currentIndex]} alt="Page Image" />
        <div className="modal-controls">
    
          <button className="modal-middle-button" onClick={handleBack}>PREVIOUS</button>

          <button className="modal-middle-button" onClick={handleNext}>NEXT</button>

        </div>

      </motion.div>
    </div>
  );
};

export default ModalGroupProject;
