import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";
import video3 from '../assets/Video-3.mp4';
import styles from './Question.module.css';

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

const Question3 = () => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState({ s: 0, m: 2 });

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

    const handleNext = () => {
        navigate('/question4');
    }

    const handlePrev = () => {
        navigate('/question2');
    }

    const handleStartRecording = () => {
        if (!isActive) {
            startRecording();
        } else {
            pauseRecording();
        }

        setIsActive(!isActive);
        run();
        setInterval(run, 1000);
        document.getElementById("instruction").innerHTML = isActive ? "Paused" : "Started";
    }

    const handleStopRecording = () => {
        stopRecording();
        setIsActive(isActive);
        pauseRecording();
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
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <h3 className='mb-4'>3/4</h3>
                        <h5>Could you walk me through the most challenging projects so far in your life</h5>
                        <h6>Hint : Anything that you create in your college, internships  etc.</h6>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-wrap gap-2'>
                                <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause" : "Answer"}</button>
                                {
                                    isActive && (
                                        <button onClick={handleStopRecording} className="btn btn-danger">Save Answer</button>

                                    )
                                }
                                <button className={`${isActive ? "" : "d-none"} btn btn-outline-dark`} onClick={() => window.location.reload()}>Retake Answer</button>
                            </div>
                            <div className='d-flex flex-wrap gap-2'>
                                <button onClick={handlePrev} className='btn btn-outline-secondary'>Prev</button>
                                <button onClick={handleNext} className='btn btn-dark'>Next</button>
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
                                        src={video3}
                                        title="YouTube video"
                                        controls
                                        autoPlay
                                    ></video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${styles.card} card h-100 shadow border-0`}>
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
        </>
    )
}

export default Question3;
