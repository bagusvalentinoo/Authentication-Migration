const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            Role.belongsToMany(models.User, {
                through: models.UserHasRole,
                foreignKey: 'role_id',
                otherKey: 'user_id'
            })
        }
    }

    Role.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING(50),
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
            modelName: 'Role',
            tableName: 'roles'
        }
    )

    Role.roleNames = [
        'Admin',
        'PM',
        'User'
    ]

    return Role
}