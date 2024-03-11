import NavChannels from '../NavChannels';
import NavSections from '../NavSections';
import NavUser from '../NavUser';

import './style.css';

function Nav(): JSX.Element {
    return (
        <nav>
            <h1>SHIBA TV</h1>
            <NavSections />
            <NavChannels />
            <NavUser />
        </nav>
    );
}

export default Nav;
