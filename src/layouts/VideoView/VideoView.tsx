import VideoMonitor from '../../components/VideoMonitor/VideoMonitor';

import './VideoView.css';

function VideoView(): JSX.Element {
    return (
        <div className="VideoView">
            <div className="VideoScreen card">
                <iframe
                    src="https://www.youtube.com/embed/50BpkTCCPVk?controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                />
            </div>
            <VideoMonitor />
        </div>
    );
}

export default VideoView;
