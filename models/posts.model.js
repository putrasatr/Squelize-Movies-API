module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts", {
        userId: {
            type: Sequelize.INTEGER
        },
        images: {
            type: Sequelize.STRING
        },
        likes: {
            type: Sequelize.INTEGER
        },
        captions: {
            type: Sequelize.STRING
        }
    });

    return Posts;
}