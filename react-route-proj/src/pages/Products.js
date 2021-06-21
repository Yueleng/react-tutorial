import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>The Products Page!</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Keyboard</Link>
        </li>
        <li>
          <Link to="/products/p3">Keyboard</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
