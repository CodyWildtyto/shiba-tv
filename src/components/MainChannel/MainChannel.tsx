import { useEffect, useState } from 'react';

import { TChannel } from '../../types/channel';
import { TVideo } from '../../types/video';
import { querySearchChannel } from '../../utils/api';
import { parseChannelVideos } from '../../utils/parsers';
import MainVideo from '../MainVideo/MainVideo';

import './MainChannel.css';

function MainChannel({
    id,
    name,
    subscriberCount,
    title,
    thumbnailUrl,
    videoCount,
}: TChannel): JSX.Element {
    const [videoList, setVideoList] = useState<TVideo[]>([]);

    const fetchChannelVideos = async () => {
        const { data } = await querySearchChannel(id);

        setVideoList(parseChannelVideos(data));
    };

    useEffect(() => {
        fetchChannelVideos();
    }, []);

    return (
        <div className="MainChannel" id={id}>
            <header>
                <div className="MainChannelHeader__Head">
                    <img className="card" alt="" src={thumbnailUrl} />
                </div>
                <div className="MainChannelHeader__Body">
                    <h3>{title}</h3>
                    <span>{name}</span>
                </div>
                <div className="MainChannelHeader__Tail">
                    <div className="MainChannelHeader__Tail__Subscribers">
                        <span>SUBSCRIBERS</span>
                        <span>{Number(subscriberCount).toLocaleString()}</span>
                    </div>
                    <div className="MainChannelHeader__Tail__Videos">
                        <span>VIDEOS</span>
                        <span>{Number(videoCount).toLocaleString()}</span>
                    </div>
                </div>
            </header>
            <div className="MainChannel__Carousel">
                {videoList.map((item: TVideo, index) => (
                    <MainVideo
                        key={index}
                        {...{
                            ...item,
                            ...{
                                channelName: name,
                                channelThumbnailUrl: thumbnailUrl,
                                channelTitle: title,
                            },
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainChannel;
