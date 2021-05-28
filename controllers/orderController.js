const { User } = require('../models');

const { Order } = require('../models');

class Purchase {

    async newOrder(body) {
        return Order.create(body);
    }

    async searchAllOrders() {
        return Order.findAll();
    }

    // async searchOrdersByCity(city){
    //     let arrayOrders =[];
    //     let data = await User.findOne({where: {city}});
    //     console.log("Este es el data " + data.city);
    //     console.log("Este es el data " + data.name);
    //     console.log("Este es el data " + data.lastname);
    //     console.log("Este es el data " + data.id);
    //     let allOrders = await Order.findAll();
    //     console.log(allOrders);
    //     for (let i in allOrders) {
    //         console.log(allOrders[i].id)
    //         if (data.id == allOrders[i].userId){
    //             arrayOrders.push(allOrders[i]);
    //             console.log("Este es el allOrders: "+allOrders[i].userId)
    //             console.log("Este es el array: "+arrayOrders[i])
    //         }
    //     }
    //     return arrayOrders;
    //         //  if (genreName == arrayOrders[i].id)
    // }

    async searchOrdersByCity(city){
        let arrayOrders =[];
        let allOrders = await Order.findAll();
        let allUsers = await User.findAll();
        for (let j in allUsers){
            console.log('Este es cada user: '+allUsers[j].city)
            if(allUsers[j].city==city){
                for (let i in allOrders) {
                    console.log(allOrders[i].id)
                    if (allUsers[j].id == allOrders[i].userId){
                        arrayOrders.push(allOrders[i]);
                        console.log("Este es el allOrders: "+allOrders[i].userId)
                        console.log("Este es el array: "+arrayOrders[i])
                    }
                }
            }
        }
        
        return arrayOrders;
            //  if (genreName == arrayOrders[i].id)
    }

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
