var frisby = require("frisby");
frisby.create('GET data required')
	  .get('http://jsonplaceholder.typicode.com/posts/1')
	  .expectStatus(200)
	  // .expectHeader('title', '')
	   .expectJSON({
			"userId": 1,
			"id": 1,
			"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		})
	.toss();

frisby.create('POST adds a random id to the object')
		.post('http://jsonplaceholder.typicode.com/posts',{
			"userId": 1,
	   		"title": "Lovely morniugn sagbddsfdsfbvchdgfdhgf"

		})
		.inspectRequest() 
		.expectStatus(201)
		.expectHeader('Content-Type', 'application/json; charset=utf-8')
		.inspectJSON() // inspect will print the console ,useful for writing specs.
		.expectJSONTypes({data:undefined})
		/*('args',{
			"userId": Number,
	    	"id": Number,
	   		"title": String
		})*/
	//.toss();

/*frisby.create('POST adds a random id to the object')
		.post('http://jsonplaceholder.typicode.com/posts',{
			"userId": 1,
	   		"title": "Lovely morniugn sagbddsfdsfbvchdgfdhgf"

		})
		.inspectRequest() 
		.expectStatus(201)
		.expectHeader('Content-Type', 'application/json; charset=utf-8')
		.inspectJSON()
		.expectJSONTypes('args',{
			"userId": Number,
	   		"title": String
		})
		
	.toss();*/

frisby.create('POST adds a random id to the object')
		.get('http://jsonplaceholder.typicode.com/posts')
		//.inspectRequest() 
		.expectStatus(200)
		.expectHeaderContains('content-Type', 'application/json')
		//.inspectJSON() //inspect will print console ,useful for writing specs.
		.expectJSONTypes('?',{ //  ? test a single item and * will test all element of entire array
			"userId": Number,
			"title" : String,
			"body": String
		})
		
	.toss();


frisby.create("GET already add")
		.get('http://jsonplaceholder.typicode.com/posts/100')
		.expectStatus(200)
		.expectJSON({
			"userId": 10,
	   		"title": "at nam consequatur ea labore ea harum"
		})
	.toss();

//PUT : update all information

frisby.create("UPDATE a resource")
		.put('http://jsonplaceholder.typicode.com/posts/1',{
			"userId": 10,
	   		"title": "sjdsbfhdgf shgdshgfsjdfh dhgfdhfg",
	   		"body": "sjdsgds dsjwet testing testing testing testing testing testing"
		})
		.expectStatus(200)
		.expectJSON({
			"userId": 10,
	   		"title": "sjdsbfhdgf shgdshgfsjdfh dhgfdhfg",
	   		"body": "sjdsgds dsjwet testing testing testing testing testing testing"
		})
	.toss();

frisby.create("UPDATE a resource")
		.patch('http://jsonplaceholder.typicode.com/posts/1',{
			"userId": 10,
	   		"title": "Good Work!! Love it",
	   		"body": "Dummby Nummy testing testing testing testing testing testing"
		})
		.expectStatus(200)
		.expectJSON({
			"userId": 10,
	   		"title": "Good Work!! Love it",
	   		"body": "Dummby Nummy testing testing testing testing testing testing"
		})
	.toss();

frisby.create("DELETE a resource")
		.patch('http://jsonplaceholder.typicode.com/posts/1')
		.expectStatus(200)
		
	.toss();

frisby.create("FILTERING through query parameters")
	.get('http://jsonplaceholder.typicode.com/posts?userId=1')
	.expectStatus(200)
	.toss();


