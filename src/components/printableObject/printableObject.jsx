import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from './printableObject.module.css';
import { FaPrint } from 'react-icons/fa';

export default function PrintReact({ children }) {
    const wrapperRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => wrapperRef.current,
    });

    return (
        <div>
            <button onClick={ handlePrint } className={styles.downloadButton}>
                <FaPrint size={'1.5rem'} />
            </button>
            <div ref={ wrapperRef }>
                { children }
            </div>
        </div>
    )
}