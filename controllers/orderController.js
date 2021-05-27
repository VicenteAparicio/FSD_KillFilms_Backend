
const { Order } = require('../models');

class Purchase {

    async newOrder(body) {
        return Order.create(body);
    }

    async searchAllOrders() {
        return Order.findAll();
    }

    // async searchOrdersByCity(city){
    //     return Order;
    // }

    async modifyOrder(body, orderId){
        return Order.update(
            {
                rentaldate: body.rentaldate,
                returndate: body.returndate
            },
            { where: 
               { id: orderId }
        })
    }

    async deleteOrder(id){
        return Order.destroy ({where:{id}})
    }




}

let orderController = new Purchase();

module.exports = orderController;
