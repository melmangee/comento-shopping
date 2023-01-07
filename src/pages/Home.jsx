import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemaButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import {mockTheme1Produdcts,mockTheme2Produdcts}from "../data/mockData"


const Home = ()=> {

    return(
        <div> 
            <div>
            
            <Navigation NaviName={"코멘토 쇼핑"}/>
            
            <GrayLine1/>

            <ThemeSection>
            <ThemeButton themeName={"#겨울 방한템"}/>
            <ThemeButton themeName={"#따순 머그컵"}/>
            </ThemeSection>
            
            <GrayLine2/>
            </div>

            <productSection>
             {/*TODO: mockData list를 화면에 노출하자*/}
             {/*자바스크립트 map 문법*/}
            {mockTheme1Produdcts.map((Product) =>( 
                <ProductCard name={Product.name} 
                             description={Product.description}
                             thumbnail={Product.thumbnail}
                />
             ))}
                </productSection>
        </div>
    );
};

const GrayLine1 = styled.div`
 height:1px;
 width:400px;
 background: #EEEEEE; 
`;

const ThemeSection = styled.div`
 display:flex;
 gap:12px;
 padding:40px 12px;
`;

const GrayLine2 = styled.div`
 height:8px;
 width:390px;
 background: #EEEEEE;
`;

const ProductSection = styled.div`
 padding:43px 24px;
`;

export default Home;