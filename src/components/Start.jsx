import React from 'react';
import styles from './Start.module.css';
import { useNavigate } from "react-router-dom";

const Start = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={`${styles.container} container`}>
                <h1>Start Interaction</h1>
                <button onClick={() => navigate("/question1")} className='btn btn-dark'>Next</button>
            </div>
        </>
    )
}

export default Start;