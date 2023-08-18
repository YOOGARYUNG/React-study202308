import React from 'react';

import Card from '../Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = () => {
  return (
    <>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2></h2>
        </header>
        <div className={styles.content}>
          <p></p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
