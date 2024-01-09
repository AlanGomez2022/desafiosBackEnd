class ProductManager {
  static #products = [];
  constructor() {}
  create(dataProduct) {
    const product = {
      id:
        ProductManager.#products.length === 0
          ? 1
          : ProductManager.#products[ProductManager.#products.length - 1].id +
            1,
      title: dataProduct.title,
      photo: dataProduct.photo,
      price: dataProduct.price,
      stock: dataProduct.stock,
    };
    ProductManager.#products.push(product);
  }
  read() {
    return ProductManager.#products;
  }
  readOne(id) {
    return ProductManager.#products.find((each) => each.id === id);
  }
}

class UserManager {
  static #users = [];
  constructor() {}
  create(dataUser) {
    const user = {
      id:
        UserManager.#users.length === 0
          ? 1
          : UserManager.#users[UserManager.#users.length - 1].id + 1,
      name: dataUser.name,
      photo: dataUser.photo,
      email: dataUser.email,
    };
    UserManager.#users.push(user);
  }
  read() {
    return UserManager.#users;
  }
  readOne(id) {
    return UserManager.#users.find((each) => each.id === id);
  }
}

//------------------------------------------------------------------------------------------------------
const products = new ProductManager();
const users = new UserManager();

products.create({
  title: "yerba mate",
  photo: "pick1",
  price: 2000,
  stock: 500,
});
products.create({
  title: "cafe",
  photo: "pick2",
  price: 5000,
  stock: 1500,
});
products.create({
  title: "fernet",
  photo: "pick3",
  price: 8500,
  stock: 100,
});
products.create({
    title: "Aceite Marolio",
    photo: "pick4",
    price: 200,
    stock: 100,
  });

console.log(products.read());
console.log (products.readOne(2));
