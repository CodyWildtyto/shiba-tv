import NavChannels from '../../components/NavChannels/NavChannels';
import NavSections from '../../components/NavShortcuts/NavShortcuts';
import NavUser from '../../components/NavUser/NavUser';

import './NavView.css';

function NavView(): JSX.Element {
    return (
        <nav className="NavView card">
            <h1>SHIBA TV</h1>
            <NavSections />
            <NavChannels />
            <NavUser />
        </nav>
    );
}

export default NavView;
