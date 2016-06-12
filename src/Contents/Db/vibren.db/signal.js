module.exports = function(sequelize, DataTypes) {
	return sequelize.define('signal', {
		presence_signal: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		numero_fichier: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		commentaire_traitement: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		trace_source: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		trace_sortie: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nombre_voies: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		coefficient_multiplicateur_00: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_01: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_02: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_03: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_04: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_05: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_06: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_07: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_08: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_09: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_10: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_11: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_12: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_13: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		coefficient_multiplicateur_14: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		temps_debut: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		temps_fin: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		frequence_echantillonage: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		nombre_points_voie: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		unite_x: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fileId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		acquisitionId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
	})
};