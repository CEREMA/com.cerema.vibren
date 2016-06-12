module.exports = function(sequelize, DataTypes) {
	return sequelize.define('acquisition', {
		presence_acquisition: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		label_acquisition: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		numero_acquisition: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		commentaire_acquisition: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		date_heure: {
			type: DataTypes.DATE,
			allowNull: true
		},
		debut_acquisition: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		fin_acquisition: {
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
		nombre_voies: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		unite_y_filtre_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_filtre_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_filtre_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_filtre_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_filtre_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_integration_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_integration_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_integration_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_integration_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_integration_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_derivation_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_derivation_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_derivation_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_derivation_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_derivation_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_spectre_puissance_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_spectre_puissance_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_spectre_puissance_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_spectre_puissance_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_spectre_puissance_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_fft_reels_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_fft_reels_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_fft_reels_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_fft_reels_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_fft_reels_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_inv_fft_reels_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_inv_fft_reels_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_inv_fft_reels_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_inv_fft_reels_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_y_inv_fft_reels_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		presence_dispositif: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		label_chantier: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		numero_dispo: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		nom_chantier: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nombre_capteurs: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		duree_acquisition: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		frequence_anti_repli: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		nom_capteur_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nom_capteur_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nom_capteur_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nom_capteur_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nom_capteur_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type_capteur_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type_capteur_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type_capteur_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type_capteur_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type_capteur_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_mesure_0: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_mesure_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_mesure_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_mesure_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unite_mesure_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sensibilite_capteur_0: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		sensibilite_capteur_1: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		sensibilite_capteur_2: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		sensibilite_capteur_3: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		sensibilite_capteur_4: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		gain_capteur_0: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		gain_capteur_1: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		gain_capteur_2: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		gain_capteur_3: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		gain_capteur_4: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		unites_par_pas_00: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_01: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_02: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_03: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_04: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_05: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_06: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_07: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_08: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_09: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_10: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_11: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_12: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_13: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		unites_par_pas_14: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		type_acquisition: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		source_trigger: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		duree_trigger: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		seuil_trigger: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		source_visu: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		fileId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
	})
};