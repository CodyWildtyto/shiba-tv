import NavChannelsItem from './NavChannelsItem';
import { useContextStore } from '../../utils/context';

import './NavChannels.css';

function NavChannels(): JSX.Element {
    const { channelList } = useContextStore();

    return (
        <div className="NavChannels">
            {channelList.map(({ id, title }, index) => (
                <NavChannelsItem id={id} key={index} text={title} />
            ))}
        </div>
    );
}

export default NavChannels;
