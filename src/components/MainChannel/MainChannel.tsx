import MainVideo from '../MainVideo/MainVideo';

import './MainChannel.css';

type TMainChannel = {
    id: string;
    name: string;
    subscriberCount: number;
    title: string;
    thumbnailUrl: string;
};

function MainChannel({
    id,
    name,
    subscriberCount,
    title,
    thumbnailUrl,
}: TMainChannel): JSX.Element {
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
                        <span>245</span>
                    </div>
                </div>
            </header>
            <div className="MainChannel__Carousel">
                {[...new Array(10)].map((_, index) => (
                    <MainVideo key={index} />
                ))}
            </div>
        </div>
    );
}

export default MainChannel;
