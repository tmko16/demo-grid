const fakeLoader = async (fn: Function, time: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            console.log(3)
            resolve(true);
        }, time)
    })
}

export default fakeLoader
