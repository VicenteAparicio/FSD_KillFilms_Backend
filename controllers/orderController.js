
const { Order } = require('../models');

class Purchase {

    async newOrder(body) {
        return Order.create(body);
    }

    async searchAllOrders() {
        return Order.findAll();
    }

    async searchOrdersByCity(city){
        return Order;
    }
}

let orderController = new Purchase();

module.exports = orderController;
