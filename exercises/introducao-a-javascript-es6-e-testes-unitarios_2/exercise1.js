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
        margherita: {
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
      const deliveryPerson = order.order.delivery.deliveryPerson;
      const customerName = order.name;
      const customerPhone = order.phoneNumber;
      const customerStreet = order.address.street;
      const customerNumber = order.address.number;
      const customerApt = order.address.apartment;

      console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, telefone: ${customerPhone}, R. ${customerStreet}, Nº ${customerNumber}, AP ${customerApt}`)
  }

  
  customerInfo(order);
  
  const orderModifier = (order) => {

    const newBuyer = order.name = 'Luiz Silva';
    const newPrice = order.payment.total = 50;
    const drink = order.order.drinks.coke.type;
    const pizzas = Object.keys(obj.order.pizza);

    console.log(`Olá ${newBuyer}, o total de seu pedido ${pizzas} e ${drink} é R$ ${newPrice},00`)

  
  }


  orderModifier(order);