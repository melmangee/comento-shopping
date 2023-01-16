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
    const response = getProductDetail(productId);
    setProduct(response);
  }, []);

  return (
    <Container>
      <Navigation />
      {product && (
        <main>
          <MainImage
            style={{
              backgroundImage: `url(${product.thumbnail})`,
            }}
          />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.price}원</ProductDescription>

          <MenuTabs>
            <MenuTab>상품 설명</MenuTab>
            <MenuTab>상품 후기</MenuTab>
          </MenuTabs>

          <ProductDetailImage src={product.mainImage} alt="사진 설명" />
        </main>
      )}
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div``;
const MainImage = styled.div`
  width: 100%;
  height: 420px;
  background-size: cover;
  background-position: center;
  margin-bottom: 24px;
`;

const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  padding-bottom: 8px;
`;

const ProductDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.86);
  padding-bottom: 24px;
`;

const MenuTabs = styled.div`
  display: flex;
`;
const MenuTab = styled.div`
  flex: 1;
  padding: 14px;
  border: solid 1px #eeeeee;
  text-align: center;
  background-color: ${(props) => props.active && "#eeeeee"};
`;

const ProductDetailImage = styled.img`
  width: 100%;
`;