Etudes = {
	nouveau: function(o, cb)
	{
		Etudes.using('db').post('vibren','etudes',o ,cb);
	},
	getAll: function(o,cb)
	{
		Etudes.using('db').model('vibren','select * from etudes',cb);
	}
};

module.exports=Etudes;