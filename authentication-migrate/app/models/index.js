'use strict'

const fs = require('fs')
const path = require('path')
const { Sequelize, DataTypes } = require('sequelize')
const process = require('process')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../../config/config.js')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const modelFolders = [
  'user',
]

modelFolders.forEach(folder => {
  const dirName = __dirname + '/' + folder
  fs
    .readdirSync(dirName)
    .filter(file => {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1
      )
    })
    .forEach(file => {
      const model = require(path.join(dirName, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model
    })
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
db.DataTypes = DataTypes

module.exports = db
