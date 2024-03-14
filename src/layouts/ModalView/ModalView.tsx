import { useEffect, useState } from 'react';

import { useContextStore } from '../../context';
import VideoView from '../VideoView/VideoView';

import './ModalView.css';

function ModalView(): JSX.Element {
    const { isVideoDisplayed } = useContextStore();
    const [isModalEnabled, setIsModalEnabled] = useState(isVideoDisplayed);

    useEffect(() => {
        setIsModalEnabled(isVideoDisplayed);
    }, [isVideoDisplayed]);

    return (
        <div className="ModalView">
            {isModalEnabled && <div className="ModalView__Curtain" />}
            {isVideoDisplayed && <VideoView />}
        </div>
    );
}

export default ModalView;
