const makeSequelize = ({ Sequelize }) => {
  const {
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABASE_PASSWORD
  } = process.env;
  const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    {
      host: DATABASE_HOST,
      dialect: "mysql",
      define: {
        freezeTableName: true
      }
    }
  );

  return sequelize;
};

module.exports = makeSequelize;
