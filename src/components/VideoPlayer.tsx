import React from "react";
import Webcam from "react-webcam";

export const VideoPlayer: React.FunctionComponent = () => {
    return (
        <div className="VideoPlayer">
            <Webcam data-testid="test-video"/>
        </div>
    );
}