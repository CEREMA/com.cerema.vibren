App.view.define('VMain', {

	extend: 'Ext.Panel'
	, alias: 'widget.mainform'
	, border: false,

	layout: "border",

	items: [{
		region: 'north'
		, height: 25
		, minHeight: 25
		, border: false
		, baseCls: 'cls-header'
		, xtype: "Menu"
		, itemId: "MenuPanel"
		, menu: [{
			text: "Etudes"
			, menu: [{
				text: "Nouveau"
				, itemId: "MNU_NEW"
      }, {
				text: "Ouvrir"
				, itemId: "MNU_OPEN"
      }]
    }]
  }, {
		region: "center"
		, split: true
		, itemId: "ClearWater"
		, hidden: false
		, bodyCls: "wallpaper_rainbow"
  }, {
		region: "center"
		, split: true
		, hidden: true
		, itemId: "mainScreen"
		, bodyStyle: "background-color: white"
		, layout: "vbox"
		, items: [{
			padding: 10
			, fieldLabel: "Etude"
			, itemId: "etude"
			, xtype: "textfield"
			, width: "100%"
			, height: 25
    }, {
			padding: 10
			, fieldLabel: "Description"
			, itemId: "description"
			, xtype: "textarea"
			, width: "100%"
		    , height: 55
    }, {
			layout: "vbox"
			, width: "100%"
			, flex: 1
			, border: true
			, padding: 10
			, items: [
        // Left menu
				{
					xtype: "grid"
					, itemId: "acquisitionsGrid"
					, height: 200
					, width: "100%"
					, selType: 'cellmodel'
					, tbar: [
            // Import bar
						{
							text: "Importer"
							, iconCls: "import"
							, itemId: "import"
            }
          ]
					, // Acquisitions bar
					columns: [{
						text: "Acquisitions"
						, flex: 1
						, dataIndex: "label_acquisition"
          }]
			, store: App.store.create('App.Acquisitions.getAll', {
				autoLoad: true
				, storeId: "gridStore"
			})
        }, 
		{
			border: true
			, flex: 1
			, tabPosition: "top"
			, width: "100%"
			, xtype: 'tabpanel'
			, itemId: 'chartTab'
			, defaults: {
				autoScroll: true
				, bodyPadding: 10
			}
        }
      ]
    }]
  }]

});