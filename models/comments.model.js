module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
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

    return Comments;
}