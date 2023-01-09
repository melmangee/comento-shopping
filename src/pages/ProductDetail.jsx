import { useParams } from "react-router-dom";
const ProductDetail = ()=> {

    return<div>상품상세 페이지</div>;
    // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();

};
    
    export default ProductDetail;