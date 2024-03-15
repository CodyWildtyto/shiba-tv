import { useEffect, useState } from 'react';

import { useContextStore } from '../../utils/context';

import './NavShortcuts.css';

function NavShortcuts(): JSX.Element {
    const { isVideoDisplayed, setIsVideoDisplayed } = useContextStore();
    const [isShortcutsEnabled, setIsShortcutsEnabled] =
        useState(isVideoDisplayed);

    const handleBackClick = () => setIsVideoDisplayed(false);

    useEffect(() => {
        setIsShortcutsEnabled(isVideoDisplayed);
    }, [isVideoDisplayed]);

    return (
        <div
            className={`NavShortcuts ${
                isShortcutsEnabled && 'NavShortcuts--Active'
            }`}
        >
            {isVideoDisplayed && (
                <button
                    className="NavShortcuts__Back card"
                    onClick={handleBackClick}
                    type="button"
                >
                    <i>〈</i>
                      Back
                </button>
            )}
        </div>
    );
}

export default NavShortcuts;
