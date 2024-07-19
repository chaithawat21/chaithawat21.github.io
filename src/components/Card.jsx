import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";


const Card = ({ image,identifier }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="card"
      key={identifier}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="card-hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.h1
              className="card-text"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore Now</span>

            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <img className="card-image" src={image} alt="Card Image" />
    </motion.div>
  );
};

export default Card;
