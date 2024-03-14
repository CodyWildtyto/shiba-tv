import './VideoMonitor.css';

function VideoMonitor(): JSX.Element {
    const title = "Max but he's a 9 minute greenscreen or something";
    const desc = `Green Screen Footage of shiba Max. Feel free to use\nNoteblock Music by DGigsTV:\nhttps://www.youtube.com/user/Eolk121\n\nScenes:\n00:00 - Max's Brief Summary\n00:36 - Front Shot 1\n01:10 - Yawn\n01:30 - Snacc Time 1\n01:59 - Walk Scenes 1\n02:15 - Patience\n3:03 - Shot From Above\n3:24 - Sneezes\n4:08 - Medium Shot\n4:26 - Snacc Time 2\n4:56 - Walk Scenes 2\n5:28 - Sit And Leave\n6:02 - Big Snacc\n7:34 - Front Shot 2\n8:04 - Dark Shot\n8:42 - Message From Le Fishe`;

    return (
        <div className="VideoMonitor card">
            <h3>{title}</h3>
            <div className="VideoMonitor__Author">
                <div className="VideoMonitor__Author__Head">
                    <img className="card" alt="" src="/mock/avatar.jpg" />
                </div>
                <div className="VideoMonitor__Author__Body">
                    <h4>ShibeNation</h4>
                    <span>@shibenationmax</span>
                </div>
            </div>
            <div className="VideoMonitor__Description">{desc}</div>
        </div>
    );
}

export default VideoMonitor;
