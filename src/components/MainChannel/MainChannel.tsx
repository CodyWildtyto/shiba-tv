import MainVideo from '../MainVideo/MainVideo';

import './MainChannel.css';

type TMainChannel = {
    name: string;
    title: string;
};

function MainChannel({ name, title }: TMainChannel): JSX.Element {
    return (
        <div className="MainChannel">
            <header>
                <div className="MainChannelHeader__Head">
                    <img className="card" alt="" src="/mock/avatar.jpg" />
                </div>
                <div className="MainChannelHeader__Body">
                    <h3>{title}</h3>
                    <span>{name}</span>
                </div>
                <div className="MainChannelHeader__Tail">
                    <div className="MainChannelHeader__Tail__Subscribers">
                        <span>SUBSCRIBERS</span>
                        <span>58,200</span>
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
