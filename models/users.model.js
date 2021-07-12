module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        }
    });

    return Users;
}