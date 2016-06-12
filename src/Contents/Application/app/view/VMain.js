App.view.define('VMain', {

	extend: 'Ext.Panel'
	, alias: 'widget.mainform'
	, border: false,

	layout: "border",

	items: [{
		region: 'north', 
		height: 25, 
		minHeight: 25, 
		border: false, 
		baseCls: 'cls-header', 
		xtype: "Menu", 
		itemId: "MenuPanel", 
		menu: [{
			text: "Etudes", 
			menu: [{
				text: "Nouveau", 
				itemId: "MNU_NEW"
      		}, 
			{
				text: "Ouvrir", 
				itemId: "MNU_OPEN"
      		}]
    	}]
  	}, 
	{
		region: "center", 
		split: true, 
		itemId: "ClearWater", 
		hidden: false, 
		bodyCls: "wallpaper_rainbow"
	}, 
	{
		region: "center", 
		split: true, 
		hidden: true, 
		itemId: "mainScreen", 
		bodyStyle: "background-color: white", 
		layout: "vbox", 
		items: [{
			padding: 10, 
			fieldLabel: "Etude", 
			itemId: "etude", 
			xtype: "textfield", 
			width: "100%", 
			height: 25
    	}, 
		{
			padding: 10
			, fieldLabel: "Description"
			, itemId: "description"
			, xtype: "textarea"
			, width: "100%"
		    , height: 55
    	}, 
		{
			layout: "vbox", 
			width: "100%", 
			flex: 1, 
			border: true, 
			padding: 10, 
			items: [
			{
				xtype: "grid", 
				itemId: "acquisitionsGrid", 
				height: 180, 
				width: "100%", 
				selType: 'cellmodel', 
				tbar: [
				{
					text: "Importer", 
					iconCls: "import", 
					itemId: "import"
				}
				],
				columns: [
				{
					text: "Acquisitions", 
					width: 100, 
					dataIndex: "label_acquisition"
				},
				{
					text: "Numéro", 
					width: 50, 
					dataIndex: "numero_acquisition"
				},
				{
					text: "Fréquence", 
					width: 150, 
					dataIndex: "frequence_echantillonage"
				},
				{
					text: "Voies", 
					width: 50, 
					dataIndex: "nombre_voies"
				},
				{
					text: "Points/Voie", 
					width: 150, 
					dataIndex: "nombre_points_voie"
				},
				{
					text: "Date-heure", 
					width: 150, 
					dataIndex: "date_heure",
					renderer: function(value) {
						
						return value.toMySQL();
					}
				},
				{
					text: "Début", 
					width: 100, 
					dataIndex: "debut_acquisition"
				},
				{
					text: "Fin", 
					width: 100, 
					dataIndex: "fin_acquisition"
				},
				{
					text: "Commentaires", 
					flex: 1, 
					dataIndex: "commentaire_acquisition"
				}
				],
				store: App.store.create('vibren://acquisitions', {
					autoLoad: true, 
					storeId: "gridStore"
				})
        }, 
		{
			border: true,
			flex: 1,
			tabPosition: "top",
			width: "100%",
			xtype: 'tabpanel',
			itemId: 'chartTab',
			tbar: [
			{
				xtype: "combo",
				itemId: "voie",
				displayField: "voie",
				valueField: "voie",
				store: App.store.create({fields:["voie"],data:[]})
			}
			],
			defaults: {
				autoScroll: true,
				bodyPadding: 10
			}
        }
      ]
    }]
  }]

});