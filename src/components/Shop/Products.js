import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "First Book",
    price: 10,
    description: "This is a first product - amazing!",
    id: 1,
  },
  {
    title: "Second Book",
    price: 15,
    description: "This is a second product - amazing!",
    id: 2,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
