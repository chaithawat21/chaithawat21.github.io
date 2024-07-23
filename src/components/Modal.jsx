import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modal = ({ image, repo, liveSite, onClose }) => {

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img className="modal-image" src={image} alt="Card Image" />
        <div className="modal-button">
        <a className="repo" href={repo} target="_blank">REPOSITORY</a>
        <a className="liveSite" href={liveSite} target="_blank">LIVE SITE</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
