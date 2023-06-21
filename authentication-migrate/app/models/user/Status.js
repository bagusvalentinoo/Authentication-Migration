const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Status extends Model {
        static associate(models) {
            Status.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user'
            })
        }
    }

    Status.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            title: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            body: {
                type: DataTypes.TEXT,
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
            modelName: 'Status',
            tableName: 'statuses'
        }
    )

    return Status
}