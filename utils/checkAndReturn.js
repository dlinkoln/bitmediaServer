
const User = require('../models/User');

module.exports = async (data, Model) => {
  try {
    const isExist = await Model.findOne()
    if (!isExist) await Model.bulkCreate(data, { raw: true })
  }
  catch (err) {
    console.log(err)
  }

}