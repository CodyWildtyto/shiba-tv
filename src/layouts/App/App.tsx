import { useEffect } from 'react';

import { queryChannels } from '../../utils/api';
import { useContextStore } from '../../utils/context';
import { parseChannelList } from '../../utils/parsers';
import * as wheel from '../../utils/wheel';
import MainView from '../MainView/MainView';
import ModalView from '../ModalView/ModalView';
import NavView from '../NavView/NavView';

import './App.css';

function App() {
    const { setChannelList } = useContextStore();

    wheel.init();

    const fetchChannelList = async () => {
        const { data } = await queryChannels();

        setChannelList(parseChannelList(data));
    };

    useEffect(() => {
        fetchChannelList();
    }, []);

    return (
        <div className="App">
            <NavView />
            <MainView />
            <ModalView />
        </div>
    );
}

export default App;
