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
    customUrl: string;
    title: string;
    thumbnails: TYoutubeThumbnail;
};

export type TYoutubeStatistics = {
    subscriberCount: number;
};

export type TYoutubeChannel = {
    id: string;
    snippet: TYoutubeSnippet;
    statistics: TYoutubeStatistics;
};
