module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mesures', {
		voie: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		points: {
			type: 'LONGTEXT',
			allowNull: true
		},
		acquisitionId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		signalId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
	})
};