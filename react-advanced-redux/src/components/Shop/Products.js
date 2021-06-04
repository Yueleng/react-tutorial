import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ARRAYS = [
  {
    id: "p1",
    price: 6,
    title: "Introduction to Algorithms",
    description:
      "The latest edition of the essential text and professional reference, with substantial new material on such topics as vEB trees, multithreaded algorithms, dynamic programming, and edge-based flow.",
  },
  {
    id: "p2",
    price: 5,
    title: "Node.js Design Patterns",
    description:
      "When we wrote Node.js Design Patterns, Third Edition, the main goal was to create a book that was worth buying, with content not easily available on the internet or in other books, and with a level of detail that is hard to find in a free online article. The best way to do this was to tap into our own experience and incorporate into the book the patterns, the techniques and the principles that we use every day.",
  },
  {
    id: "p3",
    price: 7,
    title: "Computer Systems: A Programmer's Perspective, 3 Edition",
    description: "System Design Bible",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ARRAYS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
