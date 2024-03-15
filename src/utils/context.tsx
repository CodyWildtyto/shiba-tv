import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';

type TChannel = {
    id: string;
    name: string;
    title: string;
};

type TStore = {
    isVideoDisplayed: boolean | null;
    setIsVideoDisplayed: Dispatch<SetStateAction<boolean | null>>;
    channelList: TChannel[];
    setChannelList: Dispatch<SetStateAction<TChannel[]>>;
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

    const store = useMemo(
        () => ({
            isVideoDisplayed,
            setIsVideoDisplayed,
            channelList,
            setChannelList,
        }),
        [isVideoDisplayed, channelList]
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
