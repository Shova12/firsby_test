var frisby = require("frisby");
frisby.create('GET JSON data from an endpoint')
	.get('http://httpbin.org/get')
	.expectStatus(200)
	.expectHeader('Content-Type', 'application/json')
	.expectJSON({'url': 'http://httpbin.org/get'})
.toss();

frisby.create('GET JSON data with parameters')
	.get('http://httpbin.org/get?param1=hello')
	.expectStatus(200)
	.expectHeader('Content-Type', 'application/json')
	.expectJSON({'args':{
		'param1': 'hello'
	}})
.toss();

frisby.create('GET JSON data and validate types')
	.get('http://httpbin.org/ip')
	.expectStatus(200)
	.expectJSONTypes({'origin':String})
.toss();

frisby.create('GET something and use the after callback')
	.get('http://httpbin.org/get?param1=hello')
	.after(function(err, res, body){ //res is response
		expect(JSON.parse(body).args.param1).toMatch('hello')
	})
.toss();

frisby.create('GET something and use the after callback')
	.get('http://httpbin.org/get?param1=hello')
	.afterJSON(function(body){
		expect(body.args.param1).toMatch('hello')
	})
.toss();

/*frisby.create('POST login details')
	.post('https://twitter.com/rest/login',
		{ username : 'utesttester11@gmail.com', password:'g@gal2016'},
		{ json: true},
		{ heaaders: { 'Content-Type': 'application/json;charset=utf-8'}})
	.expectStatus(403)
	.expectHeader('Content-Type', 'application/json;charset=utf-8')
	.expectJSONTypes({
		token:undefined
	})
	.afterJSON(function(res){
		frisby.globalSetup({
			request:{
				headers:{'x-access-token': res.token}
			}
		});*/

	
//})
//.toss();




frisby.create('Ensure this is *actually* a real teapot, not some imposter coffee pot')
	   .get('http://httpbin.org/status/418')
	   .expectStatus(418)
	   .expectBodyContains('teapot')
.toss();

/*frisby.create('Ensure response has proper JSON types in specified keys')
		.post('http://httpbin.org/post',{
			"arr": [1,2,3,4,5],
			"foo": "bar",
			"bar":"baz",
			"answer": 42
		})
		.expectStatus(200)
		.expectJSONTypes('*',{
			"arr": array,
			"foo": String,
			"bar":String,
			"answer": Number
		})
.toss();
*/
frisby.create('Ensure test has foo and bar')
	  .get('http://httpbin.org/get?foo=bar&bar=baz')
	  .expectJSON('args', {
	    "foo": 'bar',
	    "bar": 'baz'
	  })
.toss();

/*frisby.create('Ensure response is fast enough')
	  .get('http://httpbin.org/get')
	  .expectMaxResponseTime(75)
.toss();*/








