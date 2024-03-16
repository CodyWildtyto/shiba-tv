import NavChannelsItem from './NavChannelsItem';
import { useContextStore } from '../../utils/context';

import './NavChannels.css';

function NavChannels(): JSX.Element {
    const { channelList } = useContextStore();

    return (
        <div className="NavChannels">
            {channelList.map(({ id, title, thumbnailUrl }, index) => (
                <NavChannelsItem
                    id={id}
                    key={index}
                    text={title}
                    thumbnailUrl={thumbnailUrl}
                />
            ))}
        </div>
    );
}

export default NavChannels;
