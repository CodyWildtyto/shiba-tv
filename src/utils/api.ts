import axios from 'axios';

import { API_URL, DEFAULT_CHANNEL_IDS } from '../configs/variables';

const generateDuplicateKeyParamsText = (key: string, values: string[]) =>
    [...values].map((item) => `${key}=${item}`).join('&');

const idParams = generateDuplicateKeyParamsText('id', DEFAULT_CHANNEL_IDS);

export const queryChannels = async () => axios.get(`mocks/channels/index.json`);
//
//     // Using JSON mocks instead of YouTube API because of quota
//
//     axios.get(`${API_URL}/channels?${idParams}`, {
//         params: {
//             key: process.env.REACT_APP_YOUTUBE_KEY,
//             part: 'snippet,id,statistics',
//         },
//     });

export const querySearchChannel = async (channelId: string) =>
    axios.get(`mocks/search/${channelId}.json`);
//
//     // Using JSON mocks instead of YouTube API because of quota
//
//     axios.get(`${API_URL}/search`, {
//         params: {
//             channelId,
//             key: process.env.REACT_APP_YOUTUBE_KEY,
//             maxResults: 25,
//             order: 'date',
//             part: 'snippet',
//             relevanceLanguage: 'en',
//         },
//     });
