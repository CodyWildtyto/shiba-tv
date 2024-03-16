import { TVideo } from '../types/video';
import {
    TYoutubeChannel,
    TYoutubeSnippet,
    TYoutubeStatistics,
    TYoutubeVideo,
} from '../types/youtube';

export const parseChannelList = ({ items }: { items: TYoutubeChannel[] }) =>
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
            videoCount: statistics.videoCount,
        })
    );

export const parseChannelVideos = ({ items }: any): TVideo[] =>
    items.map(({ id, snippet }: TYoutubeVideo) => ({
        channelId: snippet.channelId,
        channelTitle: snippet.channelTitle,
        description: snippet.description,
        id: id.videoId,
        publishedAt: snippet.publishedAt,
        publishTime: snippet.publishTime,
        title: snippet.title,
        thumbnailUrl: snippet.thumbnails.medium.url,
    }));
