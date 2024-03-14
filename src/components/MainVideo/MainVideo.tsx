import { useContextStore } from '../../context';

import './MainVideo.css';

function MainVideo(): JSX.Element {
    const { setIsVideoDisplayed } = useContextStore();

    const handleClick = () => setIsVideoDisplayed(true);

    return (
        <div
            className="MainVideo card"
            onClick={handleClick}
            role="button"
            tabIndex={0}
        >
            <img alt="" className="card" src="/mock/video.jpg" />
            <h4>
                Shiba Inus attracted by lamb meat that appeared on his birthday
                [4K]
            </h4>
            <span>11K views · 5 days ago</span>
        </div>
    );
}

export default MainVideo;
