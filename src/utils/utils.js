const timeFormat = (duration) => {
    return parseInt(duration / 60) + ':' + (duration % 60).toFixed(0);
};
export { timeFormat };