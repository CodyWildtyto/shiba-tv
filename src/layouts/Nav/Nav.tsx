import NavChannels from '../../components/NavChannels/NavChannels';
import NavSections from '../../components/NavSections/NavSections';
import NavUser from '../../components/NavUser/NavUser';

import './Nav.css';

function Nav(): JSX.Element {
    return (
        <nav className='Nav card'>
            <h1>SHIBA TV</h1>
            <NavSections />
            <NavChannels />
            <NavUser />
        </nav>
    );
}

export default Nav;
