import MainChannel from '../../components/MainChannel/MainChannel';
import { useContextStore } from '../../utils/context';

import './MainView.css';

function MainView(): JSX.Element {
    const { channelList } = useContextStore();

    return (
        <main className="MainView">
            {channelList.map(
                (
                    {
                        id,
                        name,
                        subscriberCount,
                        title,
                        thumbnailUrl,
                        videoCount,
                    },
                    index
                ) => (
                    <MainChannel
                        {...{
                            id,
                            key: index,
                            name,
                            subscriberCount,
                            title,
                            thumbnailUrl,
                            videoCount,
                        }}
                    />
                )
            )}
        </main>
    );
}

export default MainView;
