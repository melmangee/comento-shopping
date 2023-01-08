import styled from "styled-components"

const ProductCard = ({name, description, thumbnail, onClick}) =>{
 return ( <div> 
                <ProductCardStyled onClick={onClick}>
                    <img width="341"
                         height="204"
                         src={thumbnail}
                         alt={name}
                         />
                        <NameStyled>{name}</NameStyled>
                        <DesStyled>{description}
                        </DesStyled>
                        </ProductCardStyled>
                </div>
        );
};
const ProductCardStyled = styled.div`
  padding-bottom: 40px;
`;

const NameStyled = styled.div`
 color: #000000;
 font-weight: 700;
 font-size: 20px;
 line-height: 26px;
 padding: 12px 0px;
`;

const DesStyled = styled.div`
 color: #000000;
 font-weight: 400;
 font-size: 16px;
 line-height: 21px;
`;
export default ProductCard;