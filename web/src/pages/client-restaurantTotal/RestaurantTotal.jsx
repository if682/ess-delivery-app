import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate  } from 'react-router-dom';
import moment from 'moment';
import PageTitle from "../../components/atoms/page-title/PageTitle";

function sumItems(orders) {
  let allItems = orders.reduce((items,order) => {return items.concat(order.items)}, []);
  let allSummed = []

  // soma items entre pedidos
  allItems.reduce((res, item) => {
    if (!res[item.name]) {
      res[item.name] = { name: item.name, quantity: 0 };
      allSummed.push(res[item.name])
    }
    res[item.name].quantity += item.quantity;
    return res;
  }, {});

  return allSummed;
}

function itemList(item) {
  return (<li><strong>{item.name}</strong>, {item.quantity} pedidos</li>);
}

const RestaurantTotal = () => {
  const { restaurantID } = useParams();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(moment(new Date()).format('YYYY-MM'));

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`http://localhost:3001/orders`);
      const data = await response.json();
      const userOrders = data['2'];
      setOrders(userOrders);
    };
    fetchOrders();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const filteredOrders = orders.filter((order) => ((order.place == restaurantID) && (moment(new Date(order.date)).format('YYYY-MM') === selectedMonth)));
  const totalItems = sumItems(filteredOrders);

  return (
    <div className="order-totals-page-container">
      <PageTitle>Total de Pedidos do Restaurante {restaurantID}</PageTitle>

      
      <label htmlFor='monthInput'>Filtrar por data:</label>
      <input
        type="month"
        id="monthInput"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      />
      <button onClick={handleGoBack}>Voltar</button>
      {totalItems != [] ? (
        <ul>
          {totalItems.map(itemList)}
        </ul>
      ) : (
        <p>Nenhum pedido encontrado.</p>
      )}
    </div>
  );
};

export default RestaurantTotal;