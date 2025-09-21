import React from 'react';
import { productsData } from './constants';

const TopSellingProducts: React.FC = () => {
  return (
    <div className="chart-container">
      <div className="chart-title">Top Selling Products</div>
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, i) => (
              <tr key={i}>
                <td className="product-name">{product.name}</td>
                <td className="price">{product.price}</td>
                <td className="quantity">{product.quantity}</td>
                <td className="amount">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
