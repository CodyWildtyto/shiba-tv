export type TYoutubeImage = {
    height: number;
    url: string;
    width: number;
};

export type TYoutubeThumbnail = {
    default: TYoutubeImage;
    high: TYoutubeImage;
    medium: TYoutubeImage;
};

export type TYoutubeSnippet = {
    channelId: string;
    channelTitle: string;
    customUrl: string;
    description: string;
    publishedAt: string;
    publishTime: string;
    title: string;
    thumbnails: TYoutubeThumbnail;
};

export type TYoutubeStatistics = {
    subscriberCount: number;
    videoCount: number;
};

export type TYoutubeChannel = {
    id: string;
    snippet: TYoutubeSnippet;
    statistics: TYoutubeStatistics;
};

export type TYoutubeVideo = {
    id: { videoId: string };
    snippet: TYoutubeSnippet;
};
