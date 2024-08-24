const fakeLoader = async (fn: Function, time: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            resolve(true);
        }, time)
    })
}

export default fakeLoader
