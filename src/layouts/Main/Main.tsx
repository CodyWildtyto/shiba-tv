import MainChannel from '../../components/MainChannel/MainChannel';

import './Main.css';

function Main(): JSX.Element {
    const channelList = [
        { name: '@ShibaintheRockies', title: 'Shiba in the Rockies' },
        { name: '@sibainuonigri', title: 'shibainu ONIGIRI' },
        { name: '@ShibeNationMax', title: 'ShibeNation' },
    ];

    return (
        <main className="Main">
            {channelList.map(({ name, title }, index) => (
                <MainChannel key={index} name={name} title={title} />
            ))}
        </main>
    );
}

export default Main;
