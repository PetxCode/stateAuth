import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/storeAPI";
import { useDispatch } from "react-redux";
import { addProduct } from "../global/reduxState";

export const storeHooks = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const product = dispatch(addProduct(data)).payload;

  return { product };
};
