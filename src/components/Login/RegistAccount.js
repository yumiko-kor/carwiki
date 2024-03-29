// component
import { LoginForKakao, LoginForGoogle, LoginNaver } from "./index";

//style
import styled from "styled-components";

const RegistAccount = () => {
    return (
        <>
            <ContentWrapper>
                <InfoText>Create Account with</InfoText>
                <ImgBox>
                    <LoginForKakao />
                    <LoginForGoogle />
                    <LoginNaver />
                </ImgBox>
            </ContentWrapper>
        </>
    );
};

const ContentWrapper = styled.div`
    display: flex;
    width: 60%;
    margin: 5em auto auto 12em;
`;

const InfoText = styled.span`
    margin: auto;
    margin-right: 5px;
    color: #B6B6B6;
    font-weight: 200;
    font-size: 20px;
`;

const ImgBox = styled.div`
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

const LinkItem = styled.a`
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    background: transparent;
    padding: 15px;
    padding-top: 0px;
    padding-bottom: 7px;
`;

const Logo = styled.img`
    display: block;
    width: 2em;
`


export default RegistAccount;