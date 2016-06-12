Officer = {
	login : function(profile,auth_type,cb)
	{
		if (auth_type=="cas") {
			/*
			profile.username
			*/
			if (!profile.username) cb({});
			var mail=profile.username.toLowerCase();
			Officer.using('db').store('xxx','xxx where mail="'+mail+'")',function(err,result){
				if (!err) {
					var response={
						lastname: result.data[0].nom,
						firstname: result.data[0].prenom,
						uid: result.data[0].uid,
						mail: mail
					};
					cb(response);
				} else cb(err);
			});
		};
		if (auth_type=="google") {
			/* 
			profile.id
			profile.email
			profile.verified_email
			profile.name
			profile.given_name
			profile.family_name
			profile.link
			profile.gender
			profile.locale
			*/
			profile=profile.username;
			var mail=profile.email;
			Officer.using('db').store('xxx','xxxx where login="'+mail+'"',function(err,result){

				var response={
					lastname: profile.family_name,
					firstname: profile.given_name,
					lang: profile.locale,
					mail: mail
				};
				
				if (result.data.length>0) {
					// account already exists in our database
					response.member=1;
					response.uid=result.data[0].kage;
					cb(response);
				} else {
					// we create account...
					
				};
				
			});
			
		}
		
	}
};

module.exports = Officer;