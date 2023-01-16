import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  return (
    <ProductDetailStyled>
      <Navigation />
      {/* TODO: 삼항연산자 라는 단어로 찾아보시면 됩니다!! */}
      {/* {조건 ? true : false} */}
      {/* {조건 && true} */}
      {/* {조건1 && 조건2 && true} */}
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div``;
export default ProductDetail;