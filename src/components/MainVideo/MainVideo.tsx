import { TVideo } from '../../types/video';
import { useContextStore } from '../../utils/context';

import './MainVideo.css';

function MainVideo({
    channelName,
    channelThumbnailUrl,
    channelTitle,
    description,
    id,
    publishedAt,
    publishTime,
    title,
    thumbnailUrl,
}: TVideo): JSX.Element {
    const { setIsVideoDisplayed, setVideoData } = useContextStore();

    const handleClick = () => {
        setVideoData({
            channelName,
            channelThumbnailUrl,
            channelTitle,
            description,
            id,
            publishedAt,
            publishTime,
            title,
            thumbnailUrl,
        });
        setIsVideoDisplayed(true);
    };

    return (
        <div
            className="MainVideo card"
            onClick={handleClick}
            role="button"
            tabIndex={0}
        >
            <img alt="" className="card" src={thumbnailUrl} />
            <h4>{title}</h4>
            <span>{new Date(publishTime).toLocaleString()}</span>
        </div>
    );
}

export default MainVideo;
