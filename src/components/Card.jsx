import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";


const Card = ({ image, identifier, onClick }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="card"
      key={identifier}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => onClick(identifier)}
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
          </motion.div>
        )}
      </AnimatePresence>
      <img className="card-image" src={image} alt={`Card ${image}`} />
    </motion.div>
  );
};

export default Card;
