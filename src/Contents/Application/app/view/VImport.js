App.view.define('VImport',{
	extend: "Ext.window.Window",
    alias: "widget.TImport",
	initComponent: function() {
		this.width = 600;
        this.height = 250;
        this.title = "Importer un fichier d'acquisition";
        this.bodyCls = "white";
		this.layout="vbox";
        this.items = [
		{
			xtype: "uploadfilemanager",
			border: false,
			itemId: "up",
			flex: 1,
			width: "100%",
			uploader: '/upload'
        },
		{
			layout: "hbox",
			width: "100%",
			border: false,
			items: [
			{
				flex: 1,
				border: false
			},
			{
				margin: 10,
				xtype: "button",
				itemId: "clickImport",
				text: "Importer",
				width: 150
			}
			]
		}
		];
		this.callParent(arguments);
	}
});