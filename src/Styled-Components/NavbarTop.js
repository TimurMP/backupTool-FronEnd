import styled from "styled-components";

const NavTop = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  border-bottom: 1px solid #2A3A50;
  align-items: center;
  background: #233043;
  justify-content: space-between;
`;
const AppName = styled.h1`
  color: #FFF;
  font-family: Inter, serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.48px;
  text-transform: uppercase;
`
const HeaderLeft = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 36px;
  padding-top: 14px;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 36px;
`

const UsernameParagraph = styled.p`
  color: #D7E1EC;
  text-align: right;
  font-family: Inter, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.28px;
  padding: 0;
  margin: 0 0 0 8px;
`
export {NavTop, AppName, HeaderLeft, HeaderRight, UsernameParagraph};