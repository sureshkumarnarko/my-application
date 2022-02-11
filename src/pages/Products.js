import { makeStyles, createStyles } from "@mui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../store/actions";

const Products = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {products.map((product, index) => (
        <div key={product.id}>
          <Link className={classes.title} to={`/product/${product.title}`}>
            <h1>
              {index + 1}. {product.title}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      paddingLeft: "30px",
    },
    title: {
      textDecoration: "none",
      color: "#000",
      fontFamily: "sans-serif",
    },
  });
});

export default Products;
