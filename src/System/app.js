App = {
	init: function(app,server) {
		app.post('/',app.UPLOAD.any(),function(req,res,next) {
			App.upload.up(req,res);
		});
	}
};

module.exports = App;