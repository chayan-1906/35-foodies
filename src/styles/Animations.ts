export const SlideDown = (delay: number) => {
    return {
        initial: {
            y: '-100%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.6, delay: delay},
        },
    };
}

export const SlideUp = (delay: number) => {
    return {
        hidden: {
            y: '100%',
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.6, delay: delay},
        },
    };
}
