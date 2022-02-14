import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card } from "@mui/material";

import { makeStyles, createStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/actions";
import { GET_PRODUCT_BY_ID } from "../store/actions/types";

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      margin: "30px",
      textAlign: "left",
    },
  });
});

export { useStyles };

const ProductInfo = () => {
  const classes = useStyles();
  const product = useSelector((state) => state.product.productById);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(product);

  useEffect(() => {
    dispatch(getProductById(id));
    return () => dispatch({ type: GET_PRODUCT_BY_ID, payload: null });
  }, [dispatch, id]);

  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <Typography variant="h1">Product Info</Typography>
        <Typography variant="h5">Title: {product?.title}</Typography>
        <Typography variant="h5">
          Description: {product?.description}
        </Typography>
        <Typography variant="h5">Price: Rs.{product?.price}</Typography>
        <Typography variant="h5">Category: {product?.category}</Typography>
      </Card>
    </div>
  );
};

export default ProductInfo;
