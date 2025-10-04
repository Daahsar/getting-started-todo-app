const GREETINGS = [
    "Boom!",
    "Check Out My To-Do App!",
    "Ta-da!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() *GREETINGS.length)],
    });
};
