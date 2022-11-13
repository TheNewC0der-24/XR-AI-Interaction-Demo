import React from 'react';
import styles from './ThankYou.module.css';
import { useNavigate } from 'react-router-dom';

import thankyou from "../assets/thankyou.svg";
import report from "../assets/aCLOUD.pdf";

const ThankYou = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={`${styles.container} container my-5`}>
                <div className="row">
                    <div className='col-md-4 bg-dark'>
                        <img className='img-fluid m-auto' src={thankyou} id="characterImg" alt="ThankYou" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3 className='mb-3'>Thank you!</h3>
                            <p align="justify">
                                The interaction is now complete. This will now be analyzed by our AI
                                models (and coaches/HR managers, if applicable). You or your administrator will receive a
                                detailed feedback on the same within next 72 hours.
                            </p>
                            <p className='mt-4 text-dark'>Now you can close this window!!</p>
                            <div className='d-flex gap-2'>
                                <button onClick={() => navigate("/response")} className='btn btn-dark'>Check Answers</button>
                                <a className='btn btn-dark' href={report} target="_blank" rel="noopener noreferrer">Feedback Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;