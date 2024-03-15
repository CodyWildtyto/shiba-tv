import { useEffect } from 'react';

import { DEFAULT_CHANNEL_LIST } from '../../configs/variables';
import { useContextStore } from '../../utils/context';
import * as wheel from '../../utils/wheel';
import Main from '../MainView/MainView';
import ModalView from '../ModalView/ModalView';
import Nav from '../NavView/NavView';

import './App.css';

function App() {
    const { setChannelList } = useContextStore();

    wheel.init();

    useEffect(() => {
        setChannelList(DEFAULT_CHANNEL_LIST);
    }, []);

    return (
        <div className="App">
            <Nav />
            <Main />
            <ModalView />
        </div>
    );
}

export default App;
