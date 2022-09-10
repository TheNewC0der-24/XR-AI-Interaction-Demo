import React, { useRef, useEffect, useState } from 'react';
import styles from './Question.module.css';
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";
import video4 from '../assets/Video-4.mp4';
import Confirm from './Modal/Confirm';

const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    if (!stream) {
        return null;
    }
    return <video ref={videoRef} className="w-100" height={300} autoPlay />;
};

const Question4 = () => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState({ s: 0, m: 2 });
    const [interv, setInterv] = useState();

    const {
        status,
        previewStream,
        startRecording,
        stopRecording,
        pauseRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({
        video: true,
        audio: true,
        echoCancellation: true
    });

    const navigate = useNavigate();

    const handlePrev = () => {
        navigate('/question3');
    }

    const handleStartRecording = () => {
        if (!isActive) {
            startRecording();
        } else {
            pauseRecording();
        }

        setIsActive(!isActive);
        run();
        setInterv(setInterval(run, 1000));
        document.getElementById("instruction").innerHTML = isActive ? "Paused" : "Started";
    }

    const handleStopRecording = () => {
        stopRecording();
        setIsActive(isActive);
        pauseRecording();
        clearInterval(interv);
        document.getElementById("instruction").innerHTML = "Saved";
        document.getElementById("note").innerHTML = "Your answer is Saved";

    }

    var updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedM === 0 && updatedS === 0) {
            handleStopRecording();
            return;
        }
        if (updatedS === 0) {
            updatedM--;
            updatedS = 60;
        }
        updatedS--;
        return setTime({ m: updatedM, s: updatedS });
    }

    return (
        <>
            <div className='container my-4'>
                <div className="card shadow border-0">
                    <div className="card-body">
                        <h3 className='mb-4'>4/4</h3>
                        <h5>Thanks again for talking to me today.</h5>
                        <h5>Do you have any questions for me ?</h5>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-wrap gap-2'>
                                <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause" : "Answer"}</button>
                                {
                                    isActive && (
                                        <button onClick={handleStopRecording} className="btn btn-danger">Save Answer</button>
                                    )
                                }
                                <button className={`${isActive ? "" : "d-none"} btn btn-outline-dark float-end`} onClick={() => window.location.reload()}>Retake Answer</button>
                            </div>
                            <div className='d-flex flex-wrap gap-2'>
                                <button onClick={handlePrev} className='btn btn-outline-secondary'>Prev</button>
                                <button className='btn btn-dark' onClick={() => navigate('/thanks')}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow">
                            <h5 className="card-header bg-white">Video Context</h5>
                            <div className="card-body">
                                <div className="ratio ratio-16x9">
                                    <video
                                        src={video4}
                                        title="YouTube video"
                                        controls
                                        autoPlay
                                    ></video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${styles.card} card h-100 border-0 shadow`}>
                            <div className='card-header bg-white d-flex flex-wrap justify-content-between'>
                                <h5 id='instruction'>Answer Box</h5>
                                <div className='d-flex flex-wrap gap-2'>
                                    <span>time remaining for this question</span><h5>{time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;{time.s >= 10 ? time.s : "0" + time.s}</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className={`${isActive && 'd-none'} text-center alert alert-primary`}>Answer recording starts after you hit "Answer" button above.</h5>
                                {
                                    isActive && (
                                        <div className="ratio ratio-16x9">
                                            {status !== "stopped" ? (
                                                <VideoPreview stream={previewStream} />
                                            ) : (
                                                <video src={mediaBlobUrl} controls />
                                            )}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Confirm /> */}
        </>
    )
}

export default Question4;
