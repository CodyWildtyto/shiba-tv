import { useEffect, useRef, useState } from 'react';

import {
    APP_AREA_PADDING,
    MAIN_CHANNEL_ACTIVE_Y,
    MAIN_CHANNEL_HEIGHT,
} from '../../configs/variables';
import * as wheel from '../../utils/wheel';

import './NavChannelsItem.css';

type TNavChannelsItem = {
    id: string;
    text: string;
};

function NavChannelsItem({ id, text }: TNavChannelsItem): JSX.Element {
    const [isActive, setIsActive] = useState(false);
    const itemElement = useRef<HTMLElement>();

    const scrollWindowTo = (y: number) =>
        window.scrollTo({
            top: y - APP_AREA_PADDING,
            behavior: 'smooth',
        });

    const handleClick = () => {
        if (itemElement.current) scrollWindowTo(itemElement.current.offsetTop);
    };

    const handleWheel = () => {
        if (itemElement.current) {
            const { scrollY } = window;
            const { offsetTop } = itemElement.current;

            if (
                !isActive &&
                offsetTop < scrollY + MAIN_CHANNEL_ACTIVE_Y &&
                offsetTop + MAIN_CHANNEL_HEIGHT >
                    scrollY + MAIN_CHANNEL_ACTIVE_Y
            )
                setIsActive(true);
            else setIsActive(false);
        }
    };

    useEffect(() => {
        wheel.add(handleWheel);
        handleWheel();
        itemElement.current = [
            ...document.querySelectorAll<HTMLElement>('.MainChannel'),
        ].find(({ id: targetId }) => targetId === id);
    }, []);

    return (
        <div
            className={`NavChannelsItem ${
                isActive && 'NavChannelsItem--Active'
            }`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
        >
            <img alt="" src="/mock/avatar.jpg" />
            <span>{text}</span>
        </div>
    );
}

export default NavChannelsItem;
