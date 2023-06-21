const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsToMany(models.Role, {
                through: models.UserHasRole,
                foreignKey: 'user_id',
                otherKey: 'role_id'
            })

            User.hasMany(models.Status, {
                foreignKey: 'user_id',
                as: 'statuses'
            })
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users'
        }
    )

    return User
}