var _ = require('./libs/underscore');

var orders = [
	{
	  "orderNumber": "1",
      "orderDate": "2013-02-08",
      "status": "IN_PROCESS",
      "atHomeInd": true,
	      "orderTotal": 20,
	      "customerId": 2
	},
	{
      "orderNumber": "2",
      "orderDate": "2013-06-06",
      "status": "PROCESSED",
      "atHomeInd": false,
      "orderTotal": 10,
      "customerId": 2

    },
    {
      "orderNumber": "3",
      "orderDate": "2013-06-06",
      "status": "IN_PROCESS",
      "orderDescription": "Ship",
      "atHomeInd": false,
      "orderTotal": 50,
      "customerId": 3

    },
     {
      "orderNumber": "4",
      "orderDate": "2013-09-09",
      "orderAmount": "40",
      "atHomeInd": true,
	      "orderTotal": 100,
      "customerId": 1
    }
];

var customers = [
	{
	  "customerId": 1,
      "firstName": "Mickey",
      "lastName": "Mouse",
      "customerType": 'WEB'
	},
	{
	  "customerId": 2,
      "firstName": "Donald",
      "lastName": "Duck",
      "customerType": 'WEB'
	},
	{
	  "customerId": 3,
      "firstName": "Buzz",
      "lastName": "Lightyear",
      "customerType": 'WEB'
	}
];

var ordersWithCustomerName = _.map(orders, function(order){
	var customer = _.findWhere(customers, {'customerId': order.customerId});
	return _.extend(order, customer);
});
console.log(ordersWithCustomerName);





