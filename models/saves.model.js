module.exports = (sequelize, Sequelize) => {
    const Saves = sequelize.define("saves", {
        userId: {
            type: Sequelize.INTEGER
        },
        postId: {
            type: Sequelize.INTEGER
        }
    });

    return Saves;
}