var frisby = require('frisby');
frisby.create('Get Brighbit Twitter feed')
	.get('http://httpbin.org/get')
	.expectStatus(200)
	.expectHeader('Content-Type', 'application/json')
	.expectJSON({ 'url': 'http://httpbin.org/get' })
	.toss();
	