import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemaButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import {mockTheme1Products,mockTheme2Products}from "../data/mockData"
import { useEffect, useInsertionEffect, useState } from "react";


const Home = ()=> {
    //다시 렌더링(UI그리는 거)되는 조건 값(state)
    const [Products, setProducts] = useState();

    // 조건에 의해서 실행되는 함수
    useEffect(() => {   
        setTimeout(() => {
            setProducts(mockTheme1Products);

    },1000);    
    },[]);

    const onClickThemeButton = (themeId)=>{
        if(themeId === 1){
            setProducts(mockTheme1Products);
        } else if(themeId === 2) {
            setProducts(mockTheme2Products);
        }
        console.log("버튼 누름");
    }
    
    return(
        <div> 
            <div>
            
            <Navigation NaviName={"코멘토 쇼핑"}/>
            
            <GrayLine1/>

            <ThemeSection>
            <ThemeButton themeName={"#겨울 방한템"} 
            onClick={()=>onClickThemeButton(1)}
            />
            <ThemeButton themeName={"#여름 더워요"}
            onClick={()=>onClickThemeButton(2)}
            />
            </ThemeSection>
            
            <GrayLine2/>
            </div>

            <ProductSection>
             {/*TODO: mockData list를 화면에 노출하자*/}
             {/*자바스크립트 map 문법*/}

             {/*삼향연산자*/}
            {Products ?(
            Products.map((Product) =>( 
                <ProductCard
                key={Product.id}
                name={Product.name} 
                description={Product.description}
                thumbnail={Product.thumbnail}
                />
             ))
             ):(
             <div>테마를 선택해주세요</div>
             )}
            </ProductSection>
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