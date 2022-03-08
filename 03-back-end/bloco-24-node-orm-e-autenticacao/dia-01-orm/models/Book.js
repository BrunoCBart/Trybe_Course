module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Books',
    }
  );
  return Book;
};
