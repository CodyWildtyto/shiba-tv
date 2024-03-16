import axios from 'axios';
import { StrictMode, useEffect } from 'react';

import { API_URL, DEFAULT_CHANNEL_IDS } from '../../configs/variables';
import {
    TYoutubeChannel,
    TYoutubeSnippet,
    TYoutubeStatistics,
} from '../../types/youtube';
import { useContextStore } from '../../utils/context';
import * as wheel from '../../utils/wheel';
import MainView from '../MainView/MainView';
import ModalView from '../ModalView/ModalView';
import NavView from '../NavView/NavView';

import './App.css';

const generateDuplicateKeyParamsText = (key: string, values: string[]) =>
    [...values].map((item) => `${key}=${item}`).join('&');

const parseChannelList = ({ items }: { items: TYoutubeChannel[] }) =>
    items.map(
        ({
            id,
            snippet,
            statistics,
        }: {
            id: string;
            snippet: TYoutubeSnippet;
            statistics: TYoutubeStatistics;
        }) => ({
            id,
            name: snippet.customUrl,
            subscriberCount: statistics.subscriberCount,
            title: snippet.title,
            thumbnailUrl: snippet.thumbnails.default.url,
        })
    );

function App() {
    const { setChannelList } = useContextStore();

    wheel.init();

    const fetchChannelList = async () => {
        const idParams = generateDuplicateKeyParamsText(
            'id',
            DEFAULT_CHANNEL_IDS
        );

        const { data } = await axios.get(`${API_URL}/channels?${idParams}`, {
            params: {
                key: process.env.REACT_APP_YOUTUBE_KEY,
                part: 'snippet,id,statistics',
            },
        });

        setChannelList(parseChannelList(data));
    };

    useEffect(() => {
        fetchChannelList();
    }, []);

    return (
        <div className="App">
            <StrictMode>
                <NavView />
                <MainView />
                <ModalView />
            </StrictMode>
        </div>
    );
}

export default App;
