	console.log("Hi, I'm your program's output.");
	var _ = require('./libs/underscore');
	numbers = [4, 5, 6, 3, 2];
	//console.log("first:" + _.first(numbers));

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
	      	 "market": 'CA'
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

	// SIZE
	console.log('Number of orders processed: ' + _.size(orders));

	// LOOP
	_.each(orders, function(order){
		console.log("OrderNumber:" + order.orderNumber);
	});

	// FIND 
	console.log("orderNumber4:" + _.find(orders, function(order){ return order.orderNumber === '4'}).orderNumber);

	// FILTER
	console.log("show me the money:" + _.filter(orders, function(order){ return order.orderTotal >= 50;}));

	var ordersThatMakeMoney = _.filter(orders, function(order){ return order.orderTotal >= 50;});
	_.each(ordersThatMakeMoney, function(order){
		console.log("OrderNumber :" + order.orderNumber + "->" + order.orderTotal);
	// });

// REFACTOR START
	var highPricedOrders = function(order){
		return order.orderTotal >= 50;
	};


	var showMeOrdersWithMoney = function(order){
		return "OrderNumber :" + order.orderNumber + "->" + order.orderTotal;
	};


	console.log("Same as other:" + _.map(_.filter(orders, highPricedOrders), showMeOrdersWithMoney));

// REFACTOR END

// REDUCE 
var sumOrders = function(acc, order){
	return acc + order.orderTotal;
};

// console.log('order total: ' + _.reduce(orders, sumOrders, 0));

// console.log('order total: ' + _.reduceRight(orders, sumOrders, 0));

// var atHomeOrders = _.findWhere(orders, {atHomeInd: true});
// // WHERE
// console.log(_.where(orders, {atHomeInd: true}));
// console.log(atHomeOrders);
// PLUCK
// console.log(_.pluck(atHomeOrders, "orderNumber"));

// // MAX
// console.log("Best order:" + _.max(orders, highPricedOrders).orderNumber);

// // GROUP BY
// // show me all orders in progress
// console.log("Group by: %j",  _.groupBy(orders, 'status'));
// var inProcess = function(order){
// 	return order.orderStatus === 'IN_PROCESS';
// };
// console.log("Count by: %j",  _.countBy(orders, 'status'));
