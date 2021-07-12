const { Op } = require("sequelize");

const getCondition = (o) => {
    const condition = {}

    for (const key in o) {
        if (Number(o[key]))
            condition[key] = o[key]
        else if (o[key] != 'null') {
            condition[key] = {
                [Op.iLike]: `%${o[key]}%`
            }
        }
    }
    return condition
}

module.exports = { getCondition }