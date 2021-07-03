const { User } = require('../models');
const { Order } = require('../models');

class Purchase {

    async newOrder(body) {
        return Order.create(body);
    }

    async searchAllOrders() {
        return Order.findAll();
    }

    async searchOrderByUserId(body) {
        let userId = body.userId;
        return Order.findAll({where: {userid: userId}});
    }
    async searchOrderById(body) {
        let id = body.orderId;
        return Order.findByPk(id);
    }

    // SEARCH ORDERS BY CITY 
    async searchOrdersByCity(body){
        let arrayOrders = [];
        let city = body.city;
        let allUsers = await User.findAll({where: {city}});
        for (let j in allUsers){
            let allOrders = await Order.findAll({where: {userId: allUsers[j].id}});
            for (let i in allOrders) {
                arrayOrders.push(allOrders[i]);
            }
        }
        return arrayOrders;
    }

    // MODIFY ORDER
    async modifyOrder(body){
        let orderId = body.orderId;
        return Order.update(
            {
                rentaldate: body.rentaldate,
                returndate: body.returndate
            },
            { where: 
               { id: orderId }
        })
    }
    async modifyOrderCount(body){
        
        let orderId = body.orderId;
        let updateWatches = body.watchDates.toString();
        console.log("string de los updates", updateWatches)
        return Order.update(
            {
                howManyTimesWatched: body.howManyTimesWatched,
                watchDates: updateWatches
            },
            { where: 
               { id: orderId }
        })
    }
    
    // DELETE ORDER
    async deleteOrder(body){
        let id = body.orderId;
        return Order.destroy ({where:{id}})
    }
}

let orderController = new Purchase();

module.exports = orderController;
