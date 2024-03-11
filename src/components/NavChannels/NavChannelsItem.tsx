import './NavChannelsItem.css';

type TNavChannelsItem = {
    text: string;
}

function NavChannelsItem({ text }: TNavChannelsItem): JSX.Element {
    return (
        <li className="NavChannelsItem">
            <img alt="" src="/mock/avatar.jpg" />
            <span>{text}</span>
        </li>
    );
}

export default NavChannelsItem;
