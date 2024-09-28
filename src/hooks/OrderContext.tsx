import React, { createContext, useContext, useEffect, useState } from "react";

interface IOrderContext {
  orders: number;
  addOrder: () => void;
  addOneOrder: (quantity: number) => void
}

const OrderContext = createContext<IOrderContext>({
  orders: 0,
  addOrder: () => {},
  addOneOrder: () => {}
});

export const useOrder = () => useContext(OrderContext);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quant, setQuant] = useState(0);
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? parseInt(storedOrders) : 0;
  });

  console.log(quant, orders)

  const addOneOrder = (quantity: number) => {
    setQuant((prevOrders) => prevOrders + quantity);
  }

  const addOrder = () => {
    setOrders(quant);

    localStorage.setItem("orders", (quant + orders).toString());

    const order = localStorage.getItem("orders");

    setQuant(Number(order));
  }

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");

    if (storedOrders) {
      setOrders(parseInt(storedOrders));
    }
  }, []);
  
  return (
    <OrderContext.Provider value={{ orders, addOrder, addOneOrder }}>
      {children}
    </OrderContext.Provider>
  );
};