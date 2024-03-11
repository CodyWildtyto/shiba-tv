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
                    <span>VIDEO_COUNT</span>
                </div>
            </header>
            <div className="MainChannel__Carousel">
                {[...new Array(10)].map((_, index) => (
                    <div className="MainChannel__Item card" key={index} />
                ))}
            </div>
        </div>
    );
}

export default MainChannel;
