const GREETINGS = [
    "Boom!",
    "Check out my to-do app!",
    "Ta-da!",
];

export default async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};