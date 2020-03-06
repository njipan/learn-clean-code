const makeBlogModel = ({ sequelize, Sequelize, DataTypes }) => {
  return sequelize.define(
    "Blog",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      model: "Blog",
      sequelize,
      tableName: "blogs"
    }
  );
};

module.exports = makeBlogModel;
