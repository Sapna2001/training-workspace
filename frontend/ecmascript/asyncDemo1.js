const printOrders = () => {
    setTimeout(() => {
        console.log("inside timeout 1");
      }, 1000);

  setTimeout(() => {
    console.log("inside timeout 2");
  }, 500);

  setTimeout(() => {
    console.log("inside timeout 3");
  }, 0);
};

printOrders();
console.log("after timeout");
