import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css'; // Asegúrate de que este archivo exista

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productDetails = {
            id: 1,
            name: 'Orgullo y prejucio',
            description: 'Autora: Jane Austen. La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito. Elizabeth, una de las hijas de los Bennet, empezará una singular relación con Darcy, uno de los amigos de Bingley, que desencadenará esta historia de orgullo y prejuicios entre los dos hasta llegar a conocer el verdadero amor. ',
            price: 20000,
          };
          
          resolve(productDetails);
        }, 1000);
      });
    };

    fetchProduct().then((data) => {
      setProduct(data);
    });
  }, [itemId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;