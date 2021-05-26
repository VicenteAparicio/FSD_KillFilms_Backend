
const { Order } = require('../models');

class Purchase {

    async newOrder(body) {
        return Order.create(body);
    }

}

let orderController = new Purchase();

module.exports = orderController;
