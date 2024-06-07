import { cartDb, orderDb } from '../config/db.js';

//Beställning som gäst
async function createguestOrder(req, res) {
  try {
    const cart = await cartDb.find({});
    if (cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const totalPrice = cart.reduce((total, order) => total + order.price, 0);

    //Beräkna leveranstid
    const orderTime = new Date();
    const maxPreparationTime = Math.max(...cart.map(order => order.preptime));

    console.log(maxPreparationTime);

    const deliveryTime = new Date(
      orderTime.getTime() + maxPreparationTime * 60000
    );

    console.log(orderTime, deliveryTime);

    const order = {
      items: cart,
      totalPrice,
      deliveryTime,
      createdAt: new Date(),
    };

    await orderDb.insert(order);

    // Tömmer kundvagnen efter ordern är skapad
    await cartDb.remove({}, { multi: true });

    res.status(201).json({
      items: order.items,
      totalPrice: order.totalPrice,
      delivery: order.deliveryTime,
      message: 'Order created successfully',
      orderId: order._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create order', error: error.message });
  }
}

//Beställning som inloggad användare:
async function createOrder(req, res) {
  try {
    const cart = await cartDb.find({});
    if (cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const totalPrice = cart.reduce((total, order) => total + order.price, 0);

    // Beräkna leveranstid
    const orderTime = new Date();
    const maxPreparationTime = Math.max(...cart.map(order => order.preptime));

    console.log(maxPreparationTime);

    const deliveryTime = new Date(
      orderTime.getTime() + maxPreparationTime * 60000
    );

    console.log(orderTime, deliveryTime);

    // Kolla om användaren är inloggad
    const user = req.user;
    const order = {
      items: cart,
      totalPrice,
      deliveryTime,
      createdAt: new Date(),
      userId: user.id, // Inkluderar userId om användaren är inloggad
    };

    const newOrder = await orderDb.insert(order);

    // Tömmer kundvagnen efter ordern är skapad
    await cartDb.remove({}, { multi: true });

    res.status(201).json({
      items: newOrder.items,
      totalPrice: newOrder.totalPrice,
      delivery: newOrder.deliveryTime,
      message: 'Order created successfully',
      orderId: newOrder._id, // Inkluderar orderId om användaren är inloggad
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create order', error: error.message });
  }
}

// JENS, VILL DU GÖRA DEN HÄR TACK (getUserOrders funktionen)
// Den ska visa alla ordrar och en totalsumma för alla ordrar

// Funktion för att hämta en användares orderhistorik
async function getUserOrders(req, res) {
  try {
    // Hämta användarens ID från request params
    const userId = req.params.userId;
    console.log(userId);

    // Använd find för att hämta en enskild orderhistorik baserat på användarens ID
    const usersOrder = await orderDb.find({ userId: userId });

    // Om det inte finns någon orderhistorik för den angivna användaren, skicka tillbaka ett felmeddelande med status 404
    if (usersOrder.length === 0) {
      return res.status(404).json({ error: 'No orders found' });
    }

    // Skicka tillbaka användarens orderhistorik med status 200
    res.status(200).json({ orderCount: usersOrder.length, orders: usersOrder });
  } catch (error) {
    // Om ett fel uppstår vid hämtning av användarens orderhistorik, skicka tillbaka ett felmeddelande med status 400
    res.status(500).json({ error: 'Failed to get users orders' });
  }
}

export { createOrder, getUserOrders, createguestOrder };
