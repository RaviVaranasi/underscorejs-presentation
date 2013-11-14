	var _ = require('./libs/underscore');
	
	var orders = [
		{
		  "orderNumber": "1",
	      "orderDate": "2013-02-08",
	      "orderAmount": "14.97",
	      "status": "IN_PROCESS",
	      "noteCount": 0,
	      "store" : {
	      	 "ringStoreNumber": 27,
	      	 "storeName": "Southlake",
	      	 "market": 'TX'
	      },
	      "orderDescription": "Pickup",
	      "atHomeInd": true,
	      "orderTotal": 20
		},
		{
	      "orderNumber": "2",
	      "orderDate": "2013-06-06",
	      "orderAmount": "30.25",
	      "status": "PROCESSED",
	      "noteCount": 0,
	      "store" : {
	      	 "ringStoreNumber": 16,
	      	 "storeName": "CSD",
	      	 "market": 'TX'
	      },
	      "orderDescription": "Ship",
	      "atHomeInd": false,
	      "orderTotal": 10

	    },
	    {
	      "orderNumber": "3",
	      "orderDate": "2013-06-06",
	      "orderAmount": "30.25",
	      "status": "IN_PROCESS",
	      "noteCount": 0,
	      "store" : {
	      	 "ringStoreNumber": 22,
	      	 "storeName": "san jose",
	      	 "market": 'TX'
	      },
	      "orderDescription": "Ship",
	      "atHomeInd": false,
	      "orderTotal": 50

	    },
	     {
	      "orderNumber": "4",
	      "orderDate": "2013-09-09",
	      "orderAmount": "40",
	      "status": "PROCESSED",
	      "noteCount": 0,
	      "store" : {
	      	 "ringStoreNumber": 27,
	      	 "storeName": "palo alto",
	      	 "market": 'CA'
	      },
	      "orderDescription": "Ship",
	      "atHomeInd": true,
  	      "orderTotal": 100
	    }
	];



	var atHomeIndOrders = function(order){
				console.log('at home %j', order);
		return order.atHomeInd;
	};

	var highPricedOrders = function(order){
		console.log('order total %j', order);
		return order.orderTotal > 10;
	};

	var texasStore = function(order){
		console.log('order %j', order);
		return order.store.market === 'TX';
	};

	var highPricedAtHomeOrdersInTexas = _.compose(highPricedOrders, atHomeIndOrders, texasStore);

	_.each(orders, highPricedAtHomeOrdersInTexas);
