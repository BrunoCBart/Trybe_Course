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
        type: 'marguerita',
        amount: 1,
        price: 25,
      },
      pepperoni: {
        type: 'pepperoni',
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

//Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, 
// R. Rua das Flores, Nº: 389, AP: 701"

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson
  const customer = order.name
  const phone = order.phoneNumber
  const street = order.address.street
  const number = order.address.number
  const apartment = order.address.apartment || ''
  return `Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${phone}, 
  R. ${street}, Nº: ${number}, AP: ${apartment}`

}

console.log(customerInfo(order));


// Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  const customer = order.name = 'Luiz Silva'
  const pizza1 = order.order.pizza.marguerita.type
  const pizza2 = order.order.pizza.pepperoni.type
  const drinks = order.order.drinks.coke.type
  const price = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price +
    order.order.drinks.coke.price - 5
  return `Olá ${customer}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drinks} é R$ ${price}`
}

console.log(orderModifier(order));

function getObjectValue(obj, i) {
  const values = Object.values(obj)
  return values[i]
}

console.log(getObjectValue(lesson3, 2))