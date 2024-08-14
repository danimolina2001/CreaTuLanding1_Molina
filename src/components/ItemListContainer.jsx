import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css'; // Opcional: para estilos

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // Obtener el ID de la categoría de la URL

  useEffect(() => {
    // Simular una llamada a una API para obtener productos
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const allProducts = [
            { id: '1', name: 'Orgullo y prejucio', category: 'libros' },
            { id: 2, name: 'Smile', category: 'peliculas' },
            { id: 3, name: 'El ultimo baile', category: 'musica' },
            { id: 4, name: 'Mujercitas de Louisa May Alcott', category: 'libros' },
          ];
          resolve(allProducts);
        }, 1000);
      });
    };

    fetchProducts().then((data) => {
      if (categoryId) {
        // Filtrar productos si hay una categoría
        setProducts(data.filter(product => product.category === categoryId));
      } else {
        setProducts(data); // Mostrar todos los productos
      }
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;