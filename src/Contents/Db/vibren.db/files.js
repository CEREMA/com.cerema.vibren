module.exports = function(sequelize, DataTypes) {
	return sequelize.define('files', {
		fileid: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		filename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
	})
};