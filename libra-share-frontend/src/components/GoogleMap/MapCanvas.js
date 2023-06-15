import React, { forwardRef } from 'react';
import styles from './MapCanvas.css';

const MapCanvas = forwardRef((_, ref) => <div ref={ref} className={styles.map} />);

export default MapCanvas;
