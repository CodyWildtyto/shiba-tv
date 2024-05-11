import axios from 'axios';

import { API_URL } from '../configs/variables';

// const { REACT_APP_YOUTUBE_KEY } = process.env;

export const queryChannels = async () => axios.get(`${API_URL}channels`);

export const querySearchChannel = async (channelId: string) =>
    axios.get(`${API_URL}video?channelId=${channelId}`);
