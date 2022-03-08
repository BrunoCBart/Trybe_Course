module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'page_quantity',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  },
};
