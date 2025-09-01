// components/AdmissionModal.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import { FaFileAlt, FaTimes } from "react-icons/fa";
import styles from "./admission-modal.module.css";

const AdmissionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility and manage body scroll
  const toggleModal = useCallback((open: boolean) => {
    setIsOpen(open);
    document.body.style.overflow = open ? "hidden" : "";
  }, []);

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleModal(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [toggleModal]);

  // Close modal on click outside
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal(false);
    }
  };

  // Close modal on escape key press (accessibility)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleModal(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, toggleModal]);

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 id="modal-title">Admission Application</h2>
          <button
            className={styles.btnClose}
            onClick={() => toggleModal(false)}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalIcon}>
            <FaFileAlt />
          </div>
          <p>
            Begin your journey to academic excellence. Start your application
            now to secure your future at Euston University.
          </p>
          <a
            href="https://portal.eu.ctlearn.net"
            className={styles.btnApply}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
