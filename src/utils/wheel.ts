const callbackList: Array<
    (event: WheelEvent | TouchEvent | UIEvent | Event) => void
> = [];

let currentTimestamp = 0;

export const add = (callback: () => void) => callbackList.push(callback);

const handleWheel = (event: WheelEvent | TouchEvent | UIEvent | Event) => {
    const tempTimestamp = Date.now();

    if (tempTimestamp - currentTimestamp < 300) return;

    currentTimestamp = tempTimestamp;
    callbackList.forEach((callback) => {
        if (callback instanceof Function) callback(event);
    });
};

export const init = () => {
    window.addEventListener('wheel', handleWheel, false);
    window.addEventListener('touchmove', handleWheel, false);
    window.addEventListener('resize', handleWheel, false);
    window.addEventListener('scrollend', handleWheel, false);
};
