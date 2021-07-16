module.exports = (sequelize, Sequelize) => {
    const Likes = sequelize.define("likes", {
        text: {
            type: Sequelize.STRING
        },
        userId: {
            type: Sequelize.INTEGER
        },
        postId: {
            type: Sequelize.INTEGER
        }
    });

    return Likes;
}