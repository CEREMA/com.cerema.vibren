App.view.define('VOpen',{
	extend: "Ext.window.Window",
    alias: "widget.TOpenProject",
	initComponent: function() {
		this.width = 600;
        this.height = 250;
        this.title = "Mes études";
        this.bodyStyle = "background-color: white";
		this.layout="vbox";
        this.items = [
		{
			xtype: "grid",
			itemId: "gridprj",
			width: "100%",
			flex: 1,
			bbar: [
				'->',
				{
					text: "OK"
				}
			],
			columns: [
				{
					text: "Etude",
					dataIndex: "libelle"
				},
				{
					text: "Description",
					dataIndex: "description",
					flex: 1
				}
			],
			store: App.store.create("App.Etudes.getAll",{
				autoLoad: true
			})
		}		
		];
		this.callParent(arguments);
	}
});