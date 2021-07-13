module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("foods", {
        name: {
            type: Sequelize.STRING
        },
        ingridients: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        price: {
            type: Sequelize.INTEGER
        },
        origin: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        }
    });

    return Movies;
}