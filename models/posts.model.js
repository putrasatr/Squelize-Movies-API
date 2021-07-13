module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts", {
        userId: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        },
        likes: {
            type: Sequelize.INTEGER
        }
    });

    return Posts;
}