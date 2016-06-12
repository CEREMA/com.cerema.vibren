App.view.define('VProgress',{
	extend: "Ext.window.Window",
    alias: "widget.TProgress",
	initComponent: function() {
		this.width = 600;
        this.height = 80;
        this.title = "Progression";
        this.bodyCls = "white";
		this.layout="vbox";
        this.items = [
			{
			
			}
		];
		this.callParent(arguments);
	}
});