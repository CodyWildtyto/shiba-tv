import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';

import { TChannel } from '../types/channel';
import { TVideo } from '../types/video';

type TStore = {
    isVideoDisplayed: boolean | null;
    setIsVideoDisplayed: Dispatch<SetStateAction<boolean | null>>;
    channelList: TChannel[];
    setChannelList: Dispatch<SetStateAction<TChannel[]>>;
    videoData: TVideo | null;
    setVideoData: Dispatch<SetStateAction<TVideo | null>>;
};

type TProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const Context = createContext<TStore | undefined>(undefined);

export function ContextProvider({ children }: TProviderProps): JSX.Element {
    const [isVideoDisplayed, setIsVideoDisplayed] = useState<boolean | null>(
        null
    );
    const [channelList, setChannelList] = useState<TChannel[]>([]);
    const [videoData, setVideoData] = useState<TVideo | null>(null);

    const store = useMemo(
        () => ({
            isVideoDisplayed,
            setIsVideoDisplayed,
            channelList,
            setChannelList,
            videoData,
            setVideoData,
        }),
        [isVideoDisplayed, channelList, videoData]
    );

    return <Context.Provider value={store}>{children}</Context.Provider>;
}

export const useContextStore = () => {
    const cxt = useContext(Context);

    if (cxt === undefined) {
        throw new Error('useContextStore must be inside a ContextProvider');
    }

    return cxt;
};
