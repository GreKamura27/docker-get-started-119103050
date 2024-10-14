const GREETINGS = [
    "Halo Dunia!",
    "Selamat Datang",
    "Gaskaaannnnnn",
];
module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
