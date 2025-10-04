const GREETINGS = [
    "Boom!",
    "Check out my to-do app!",
    "Ta-da!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};