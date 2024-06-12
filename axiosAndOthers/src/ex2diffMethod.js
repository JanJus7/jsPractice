const products = [
    { name: "Product 1", price: 10, quantity: 2 },
    { name: "Product 2", price: 5, quantity: 4 },
    { name: "Product 3", price: 8, quantity: 3 },
    { name: "Product 4", price: 12, quantity: 1 },
  ];

  const calculateProductValue = (product, cb) => {
    setTimeout(() => {
      const value = product.price * product.quantity;
      cb(value);
    }, Math.floor(Math.random() * 1000));
  };

  const calculateTotalValue = (n, cb) => {
    const arr = [];
    products.reduce((acc, curr, index) => {
      if (n > index) {
        calculateProductValue(curr, (value) => {
          arr.push(value);
          if (arr.length === n) {
            cb(
              arr.reduce((acc1, curr1) => {
                acc1 += curr1;
                return acc1;
              })
            );
          }
        });
        return acc;
      }
    }, 0);
  };

  calculateTotalValue(3, (response) => {
    console.log("Wynik", response);
  });