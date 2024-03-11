import NavChannelsItem from './NavChannelsItem';

import './NavChannels.css';

function NavChannels(): JSX.Element {
    const channelList = [
        'Shiba in the Rockies',
        'shibainu ONIGIRI',
        'ShibeNation',
    ];

    return (
        <ul className="NavChannels">
            {channelList.map((text, index) => (
                <NavChannelsItem key={index} text={text} />
            ))}
        </ul>
    );
}

export default NavChannels;
