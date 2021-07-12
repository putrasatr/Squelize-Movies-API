module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movies", {
        title: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.INTEGER
        },
        language: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.STRING
        },
        image_cover: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.INTEGER
        }
    });

    return Movies;
}