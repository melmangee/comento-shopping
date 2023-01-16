import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  return (
    <ProductDetailStyled>
      <Navigation />
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div``;
export default ProductDetail;