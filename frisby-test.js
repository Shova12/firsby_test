var frisby = require('frisby');
frisby.create('Get Brighbit Twitter feed')
	.get('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=brightbit')
	.expectStatus(200)
	.expectheaderContains('content-type','application/json')
	.expectJSON('0',{
		place: function(val){expected(val).toMacthOrBeNull("Oklahoma City,Ok");}, //custom matcher callback
		user:{
			verified: false,
			location: "Oklahoma City,OK"
			url: "http://brightb.it"
		}
	})
	.expectJSONTypes('0',{
		id_str:String,
		retweeted: Boolean,
		in_reply_to_screen_name: function(val){expect(val).toBeTypeOrNull(String);}, //Custom matcher callback
		user:{
		verified: Boolean,
		location: String,
		url: String
		}

	})
	.toss();