module.exports = {
    home: (req, res, next) => {
        res.render("index", {
            title: "Express",
            tagline: "Transformá tu futuro",
        });
    },
};
