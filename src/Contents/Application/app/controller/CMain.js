App.controller.define('CMain', {
    views: [
		"VMain"
		, "VImport"
		, "VNew"
		, "VOpen"
	],

    init: function () {

        this.control({
            "menu>menuitem": {
                click: "Menu_onClick"
            },
            "button#clickImport": {
                click: "doImport"
            },
            "TNewProject button#select_OK": {
                click: "doNewProject"
            },
            "TOpenProject grid#gridprj": {
                itemdblclick: "doOpenProject"
            },
            "mainform button#import": {
                click: "doOpenImport"
            },
            "TOpenProject grid": {
                itemdblclick: "projectGrid_click"
            },
            "mainform grid#acquisitionsGrid": {
                celldblclick: "doTabs"
            }
        });
        App.init('VMain', this.onLoad);

    },

    // Appelle cleanTab sur tous les onglets.
    cleanAllTab: function () {
        var tabPanel = App.get('mainform tabpanel#chartTab');
        tabPanel.removeAll();
    },

    // Fonction utilisée lors de l'ajout/ouverture d'étude pour rafraîchir le store d'acquisition
    // et les onglets.
    refreshStoreAndTabs(context, etudeId) {
        // Appel en base pour obtenir la liste des acquisitions de l'étude
        App.Etudes_listes.getByEtude(etudeId, function (results) {
            // Le store utilisé par le menu
            var acquisitionStore = App.get('mainform panel#mainScreen grid#acquisitionsGrid').store;

            // Grâce à l'appel en base sur l'étude, on va filtrer par la liste des 
            // acquisitions reliées à l'étude
            acquisitionStore.filterBy(function (current) {
                for (index = 0; index < results.length; index++) {
                    if (current.get("id") == results[index].acquisitionId) {
                        return true;
                    }
                }
                return false;
            });
            acquisitionStore.reload();
            App.get('mainform panel#mainScreen').show();
            context.cleanAllTab();
        });
    },

    // Fonction appellée lors du choix d'une étude
    projectGrid_click: function (me, store, ndx) {
        // Etude courante
        App.ID = store.data.id;
        App.get('mainform textarea#description').setValue(store.data.description);
        App.get('mainform textfield#etude').setValue(store.data.libelle);
        _p = this;
        _p.refreshStoreAndTabs(_p, App.ID);
        me.up('window').close();
    },
    doOpenImport: function () {
        App.view.create('VImport').show();
    },
    doOpenProject: function () {

    },

    // Fonction qui initialise un Ext.JS Chart dans tab
    // points = input de points au format {x: float, y: float}
    // (x/y)Title : titre de l'axe X/Y
    // (x/y)Min, (x/y)Max : min/max de l'axe X/Y
    // nomCapteur : nom du capteur concerné
    getChart: function (chartId, tab, points, xTitle, xMin, xMax, yTitle, yMin, yMax, nomCapteur, body) {
        // Informations complémentaires sur le chart
        var sprites = [{
            type: "text",
            text: "Signal : " + nomCapteur,
            font: "17px monospace",
            y: 10
            }];

        // Format d'affichage des données dans le chart
        var series = [
            {
                showMarkers: false,
                type: "line",
                xField: "x",
                yField: "y",
                fill: false,
                smooth: true,
                style: {
                    lineWidth: 0.7
                }
            }
            ];
        // Structure contenue dans le store de type coordonnées cartésiennes.
        Ext.define('Point', {
            extend: 'Ext.data.Model',
            fields: [
                {
                    name: 'x',
                    type: 'float'
                    },
                {
                    name: 'y',
                    type: 'float'
                    }
                ]
        });
        // Store qui contiendra la structure précédemment créée.
        var store = Ext.create("Ext.data.Store", {
            model: "Point"
        });

        // Ajout de l'input dans le store.
        store.add(points);

        // Définition des axes.
        var axes = new Object();
        axes = [
                // Axe Y
            {
                title: yTitle,
                type: "Numeric",
                fields: ["y"],
                position: "left",
                minimum: yMin,
                maximum: yMax
            },
                // Axe X
            {
                title: xTitle,
                type: "Numeric",
                fields: ["x"],
                position: "bottom",
                minimum: xMin,
                maximum: xMax,
                style: {
                    textPadding: 0
                }
            }
        ];

        var chart = {
            id: chartId,
            xtype: "chart",
            renderTo: body,
            width: "70%",
            height: "60%",
            store: store,
            axes: axes,
            series: series,
            items: sprites,
            insetPadding: 25,
            shadow: false,
            padding: "10 0 0 0"
        };

        tab.add(chart);
    },

    // Fonction utilisée pour initialiser le chart d'un onglet.
    initChart: function (mesure, tab, index, cb) {
        _p = this;
        var body = Ext.getBody();
        App.Signals.getSingle(mesure.acquisitionId, function (signal) {
            var chartId = "chartDiv" + index;
            var args = new Object();
            args["points"] = mesure.points;
            args["pas"] = (signal.temps_fin - signal.temps_debut) / (signal.nombre_points_voie / signal.nombre_voies);
            App.ChartsUtils.getInitialChartPoints(args, function (splittedPoints) {
                args["points"] = splittedPoints["points"];
                args["freqEchantillonage"] = signal.frequence_echantillonage;
                /*                    _p.getChart(chartId + "base",
                                            tab,
                                            splittedPoints["points"],
                                            signal.unite_x,
                                            signal.temps_debut,
                                            splittedPoints["points"][splittedPoints["points"].length - 1]["x"],
                                            signal.unite_y0,
                                            splittedPoints["min"],
                                            splittedPoints["max"],
                                            "Signal original", body);*/
                App.ChartsUtils.getChartPointsFFT(args, function (fftPoints) {
                    // chart initialisé grâce à ml-fft
                    _p.getChart(chartId + "ML",
                        tab,
                        fftPoints["points"],
                        "Hz",
                        fftPoints["points"][0]["x"],
                        fftPoints["points"][fftPoints["points"].length - 1]["x"],
                        "amplitude",
                        fftPoints["pointsMin"],
                        fftPoints["pointsMax"],
                        "ml-fft  " + index, body);
                    // chart initialisé grâce à frequencyjs
/*                    _p.getChart(chartId + "FFT",
                        tab,
                        fftPoints["spectrum"],
                        "Hz",
                        fftPoints["spectrum"][0]["x"],
                        fftPoints["spectrum"][fftPoints["spectrum"].length - 1]["x"],
                        "amplitude",
                        fftPoints["spectrumMin"],
                        fftPoints["spectrumMax"],
                        "frequencyjs  " + index, body);*/
                    cb(tab);
                });
            });
        });
    },

    doTabs: function (me, td, cellIndex, selected, tr, rowIndex, e, eOpts) {
        // On rajoute un panel caché pour régler un bug d'affichage que je n'explique pas.
        App.get('mainform tabpanel#chartTab').add(new Ext.Panel({
            hidden: true
        }));

        var _p = this;
        _p.cleanAllTab();
        _p.doTab(selected, 0, _p);
    },

    doTab: function (selected, index, me) {
        //Attribution d'un nom de voie pour chaque onglets
        var tabPanel = App.get('mainform tabpanel#chartTab');

        var currentAcquisition = selected.data.id;
        // On récupère les mesures liées à l'acquisition choisie et on initialise les onglets.

        App.Mesures.get(currentAcquisition, function (records) {
            // Affichage de la mesure courante
            console.log(index + " " + currentAcquisition + " " + records.length);
            tab = new Ext.Panel()
            var nomVoie = records[index].voie + 1;
            tab.setTitle("Voie " + nomVoie);
            me.initChart(records[index], tab, index + 1, function (returnedTab) {
                tabPanel.add(returnedTab);
                if (records[index + 1]) {
                    if ((index+1)<=6) me.doTab(selected, index + 1, me); else return;
                }
            });

        });
    },

    // Fonction appellée lors de l'ajout d'une étude
    doNewProject: function (me) {
        var o = {
            libelle: App.get('TNewProject textfield#text_title').getValue(),
            description: App.get('TNewProject textfield#text_description').getValue()
        };
        _p = this;

        App.Etudes.nouveau(o, function (result) {
            App.ID = result.insertId;
            App.get('mainform panel#mainScreen').show();
            App.get('mainform textarea#description').setValue(App.get('TNewProject textfield#text_description').getValue());
            App.get('mainform textfield#etude').setValue(App.get('TNewProject textfield#text_title').getValue());

            _p.refreshStoreAndTabs(_p, App.ID);
            me.up('window').close();
        });
    },

    // Import d'un fichier de façon récursive
    doJobs: function (JOBS, id, cb) {
        var _p = this;
        JOBS[id]["etudeCourante"] = App.ID;
        App.Files.import(JOBS[id], function (error, msg) {
            if (!error) {
                if (JOBS[id + 1]) {
                    _p.doJobs(JOBS, id + 1, function (result) {
                        cb(result + "Import de " + JOBS[id].filename + " réussi. --- ");
                    });
                } else cb("Import de " + JOBS[id].filename + " réussi. --- ");
            } else {
                cb(msg.result);
            }
        });
    },

    // Fonction appellée lors de l'import
    doImport: function () {
        var JOBS = App.get('TImport uploadfilemanager#up').getFiles();
        _p = this;
        var myJOBS = [];
        for (var i = 0; i < JOBS.length; i++) {
            if (JOBS[i].filename.indexOf('.ACQ') > -1) myJOBS.push(JOBS[i]);
        };
        for (var i = 0; i < JOBS.length; i++) {
            if (JOBS[i].filename.indexOf('.SIG') > -1) myJOBS.push(JOBS[i]);
        };
		App.info.loading('Veuillez patienter...')
        this.doJobs(myJOBS, 0, function (msg) {
            App.notify(msg);
			App.info.hide();
            _p.refreshStoreAndTabs(_p, App.ID);
            App.get("TImport").close();
        });
    },

    new_project: function () {
        App.view.create('VNew', {
            modal: true
        }).show();
    },

    open_project: function () {
        App.view.create('VOpen', {
            modal: true
        }).show();
    },

    Menu_onClick: function (p) {
        if (p.itemId) {
            switch (p.itemId) {
                case "MNU_NEW":
                    this.new_project();
                    break;
                case "MNU_OPEN":
                    this.open_project();
                    break;
                default:
                    return;
            };
        };
    },

    onLoad: function () {}


});
