import styled from "styled-components"

const Navigation = ({NaviName})=>{
    return <NaviStyled>{NaviName}</NaviStyled>;
};

const NaviStyled = styled.div`

color:#000000;
padding:20px 152px;
font-weight: 700;
font-size: 18px;
line-height: 26px;
`;
export default Navigation;