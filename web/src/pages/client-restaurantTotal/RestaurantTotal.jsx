import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const TotalPedidosPage = (props) => {
  const { restaurantID } = useParams();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(moment(props.month).format('YYYY-MM'));

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`http://localhost:3001/orders`);
      const data = await response.json();
      const userOrders = data['2'];
      setOrders(userOrders);
      setIsLoading(false);
    };

    fetchOrders();
  }, [  ]);

  const filteredOrders = orders.filter(order => {
    const orderMonth = moment(order.date).format('YYYY-MM');
    return order.place === restaurantID && orderMonth === selectedMonth;
  });

  return (
    <div>
      <h1>Total de Pedidos do Restaurante {restaurantID}</h1>
      <label htmlFor='monthInput'>Filtrar por data:</label>
      <input
        type="month"
        id="monthInput"
        value={selectedMonth}
        min = "yyyy-MM"
        max = {moment().format('YYYY-MM')}
        onChange={(e) => setSelectedMonth(e.target.value)}
      />
      {isLoading ? (
        <p>Carregando...</p>
        
      ) :
      filteredOrders.length > 0 ? (
        <ul>
          {filteredOrders.map(order => (
            <li key={order.id}>
              <strong>ID do Pedido:</strong> {order.id}<br />
              <strong>Restaurante:</strong> {order.place}<br />
              <strong>Data:</strong> {order.date}<br />
              <strong>Itens:</strong>
              <ul>
                {order.items.map(item => (
                  <li key={item.name}>
                    {item.name} - Quantidade: {item.quantity} - Preço: R$ {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <strong>Valores:</strong>
              <ul>
                <li>
                  Subtotal: R$ {order.values.subtotal.toFixed(2)}
                </li>
                <li>
                  Taxa de Entrega: R$ {order.values.deliveryFee.toFixed(2)}
                </li>
                <li>
                  Total: R$ {order.values.total.toFixed(2)}
                </li>
              </ul>
              <strong>Método de Pagamento:</strong> {order.paymentMethod}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum pedido encontrado.</p>
      )}
    </div>
  );
};

export default TotalPedidosPage;
