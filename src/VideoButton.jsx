// src/VideoButton.jsx
import React from 'react';

function VideoButton() {
    const videoUrl = "/Videomemoria_20032025.mp4"; // Esto apunta al archivo video.mp4 en la carpeta public

    const openFullscreen = () => {
        const newWindow = window.open(videoUrl, "_blank", "fullscreen=yes");
        if (newWindow) {
            newWindow.focus();
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button
                onClick={openFullscreen}
                style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Ver Video en Fullscreen
            </button>
        </div>
    );
}

export default VideoButton;
