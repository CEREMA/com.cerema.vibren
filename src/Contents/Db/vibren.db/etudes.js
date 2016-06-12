module.exports = function(sequelize, DataTypes) {
	return sequelize.define('etudes', {
		libelle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
	})
};