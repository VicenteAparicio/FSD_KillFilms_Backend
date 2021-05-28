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
        console.log("llegamos al controller");
        let id = body.id;
        return Order.findAll({where: {userid: id}});
    }

    // async searchOrdersByCity(city){
    //     let arrayOrders =[];
    //     let allOrders = await Order.findAll();
    //     let allUsers = await User.findAll();
    //     for (let j in allUsers){
    //         if(allUsers[j].city==city){
    //             for (let i in allOrders) {
    //                 if (allUsers[j].id == allOrders[i].userId){
    //                     arrayOrders.push(allOrders[i]);
    //                 }
    //             }
    //         }
    //     }
    //     return arrayOrders;
    // }


    // SEARCH ORDERS BY CITY 
    async searchOrdersByCity(body){
        let arrayOrders =[];
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
    // DELETE ORDER
    async deleteOrder(body){
        let id = body.orderId;
        return Order.destroy ({where:{id}})
    }




}

let orderController = new Purchase();

module.exports = orderController;
