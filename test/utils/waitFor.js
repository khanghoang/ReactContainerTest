let waitsInProgress = [];

let message = `Timeout, it seems we don have the response from the async function`;

let waitFor = (testFunc, done, timeLeft = 2000) => {

    waitsInProgress.push(setTimeout(() => {
        if (timeLeft <= 0) {
            done(new Error(message));
        } else if (testFunc()) {
            done();
        } else {
            waitFor(testFunc, done, timeLeft - 10);
        }
    }, 10));
};

waitFor.clear = () => waitsInProgress.map(clearTimeout); //optionally call this in the beforeEach to ensure rogue tests are not still waiting

export default waitFor;

