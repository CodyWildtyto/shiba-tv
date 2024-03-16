import { useContextStore } from '../../utils/context';

import './VideoMonitor.css';

function VideoMonitor(): JSX.Element {
    const { videoData } = useContextStore();

    return (
        <div className="VideoMonitor card">
            <h3>{videoData?.title}</h3>
            <div className="VideoMonitor__Author">
                <div className="VideoMonitor__Author__Head">
                    <img
                        className="card"
                        alt=""
                        src={videoData?.channelThumbnailUrl}
                    />
                </div>
                <div className="VideoMonitor__Author__Body">
                    <h4>{videoData?.channelTitle}</h4>
                    <span>{videoData?.channelName}</span>
                </div>
            </div>
            <div className="VideoMonitor__Description">
                {videoData?.description}
            </div>
        </div>
    );
}

export default VideoMonitor;
