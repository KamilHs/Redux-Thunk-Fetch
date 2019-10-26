const loggingDispatchs = store => next => action => {
    if (typeof action === 'object') {
        console.log(action);
    }

    const returnValue = next(action);

    return returnValue;
}

export default loggingDispatchs;