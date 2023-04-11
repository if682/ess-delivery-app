import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TotalPedidosPage = () => {
  const { restaurantID } = useParams();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`http://localhost:3001/orders`);
      const data = await response.json();
      const userOrders = data['2'];
      setOrders(userOrders);
      setIsLoading(false);
      console.log(orders); // Valor antigo de orders
      console.log(userOrders); // Valor atualizado de orders
      console.log(restaurantID); // Valor atualizado de restaurantID (não estava sendo atualizado antes)
    };

    fetchOrders();
  }, [restaurantID]); // Removido isLoading das dependências

  return (
    <div>
      <h1>Total de Pedidos do Restaurante {restaurantID}</h1>
      {isLoading ? (
        <p>Carregando...</p>
        
      ) :
      orders.length > 0 ? (
        <ul>
          {orders.map(order => (
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
