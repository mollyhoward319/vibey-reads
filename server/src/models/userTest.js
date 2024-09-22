import { Model, DataTypes} from "sequelize";
import bcrypt from "bcrypt";
import sequelize from '../config/connection.js';

class User extends Model {
    // Hash the password before saving the user
    async setPassword(password) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}

class Users extends Model { }

    Users.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please enter a password",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Users",
            tableName: "users",
            timestamps: false,
            hooks: {
                beforeCreate: async (user) => {
                    await user.setPassword(user.password);
                },
                beforeUpdate: async (user) => {
                    await user.setPassword(user.password);
                },
            },
        }
    );

    export default Users;
