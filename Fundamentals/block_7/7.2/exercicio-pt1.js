const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const name = order.order.delivery.deliveryPerson;
  const sreet = order.address.street;
  const number = order.address.number;
  const ap = order.address.apartment;

  console.log(`Olá ${name}, entrega para: ${order.name} Telefone: ${order.phoneNumber}, ${sreet}, ${number}, AP: ${ap}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newName = order.name = 'Jorjão da Massa';
  const pizzas = Object.keys(order.order.pizza);
  const newPrice = order.payment.total = 50;
  const drink = order.order.drinks.coke.type;

  console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é ${newPrice} reais`)
}

orderModifier(order);

