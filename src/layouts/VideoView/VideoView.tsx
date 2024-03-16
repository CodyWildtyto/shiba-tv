import { useEffect } from 'react';

import VideoMonitor from '../../components/VideoMonitor/VideoMonitor';
import { useContextStore } from '../../utils/context';

import './VideoView.css';

function VideoView(): JSX.Element {
    const { videoData, setVideoData } = useContextStore();

    useEffect(
        () => () => {
            setVideoData(null);
        },
        []
    );

    return (
        <div className="VideoView">
            <div className="VideoScreen card">
                {videoData?.id && (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoData.id}?controls=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                    />
                )}
            </div>
            <VideoMonitor />
        </div>
    );
}

export default VideoView;
