import { DataTypes, Model } from "sequelize";
export class Vibes extends Model {}

export function VibesFactory(sequelize) {
  Vibes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      book_isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      song_uri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assignedUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "vibes",
      sequelize,
    }
  );
  return Vibes;
}
