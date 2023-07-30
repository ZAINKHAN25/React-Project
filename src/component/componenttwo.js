import React, { useEffect, useState } from 'react';

function Secondfoo(props) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='inline'>
      {error ? (
        <div className='card'>
          <img src="https://media.istockphoto.com/id/1149316411/vector/concept-404-error-page-flat-cartoon-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=dLlOE7s6GuI4a5so_ipUFHeW9kaFWZVf-JTrFu5rAIk=" alt="" />
          <span id='headname'>This is an</span>
          <div id='headdescription'>Error</div>
          <div>{error}</div>
        </div>
      ) : (
        products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt="" />
            <span id='headname'>{product.title}</span>
            <div id='headdescription'>{product.description}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Secondfoo;
