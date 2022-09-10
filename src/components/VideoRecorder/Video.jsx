import React, { useRef, useEffect, useState } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";

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

const Video = () => {
    const [isActive, setIsActive] = useState(false);

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

    const handleStartRecording = () => {
        if (!isActive) {
            startRecording();
        } else {
            pauseRecording();
        }

        setIsActive(!isActive);

        document.getElementById("state").innerHTML = isActive ? "Paused" : "Started";
    }

    const handleStopRecording = () => {
        pauseRecording();
        stopRecording();
        setIsActive(isActive);
        document.getElementById("state").innerHTML = "Stopped";
    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h5 className='bg-dark text-white text-center w-100 my-3 p-2' id='state'>Idle</h5>
                {status !== "stopped" ? (
                    <VideoPreview stream={previewStream} />
                ) : (
                    <video className='w-100' src={mediaBlobUrl} height={300} controls />
                )}
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-wrap gap-2'>
                    <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause" : "Answer"}</button>
                    <button onClick={handleStopRecording} className="btn btn-danger">Save Answer</button>
                </div>
                <button className='btn btn-light' onClick={() => window.location.reload()}>Retake Answer</button>
            </div>
        </>
    )
}

export default Video;