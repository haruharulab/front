import styled from "styled-components";
import { Shadow } from "../../../components/common/shadow/style";
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-top: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  select {
    width: 100px;
    padding: 5px 10px;
    margin-right: 20px;
    background-color: #000000;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.53);
    color: white;
  }
  div {
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    padding: 5px 20px;
    height: 30px;
    border-radius: 10px;
    background-color: white;
    color: black;
  }
`;

export const Plan = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
