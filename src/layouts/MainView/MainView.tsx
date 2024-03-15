import MainChannel from '../../components/MainChannel/MainChannel';
import { useContextStore } from '../../utils/context';

import './MainView.css';

function MainView(): JSX.Element {
    const { channelList } = useContextStore();

    return (
        <main className="MainView">
            {channelList.map(({ id, name, title }, index) => (
                <MainChannel id={id} key={index} name={name} title={title} />
            ))}
        </main>
    );
}

export default MainView;
