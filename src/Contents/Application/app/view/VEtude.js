App.view.define('VEtude',{
	extend: "Ext.window.Window",
    alias: "widget.TEtude",
	initComponent: function() {
		this.width = 600;
        this.height = 250;
        this.title = "Etude";
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
			store: App.store.create({
				fields: [],
				data: []
			})
		}		
		];
		this.callParent(arguments);
	}
});