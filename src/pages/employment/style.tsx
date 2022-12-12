import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  span{
    background-color: #f2f2f2;
    width: 15%;
    text-align: center;
    line-height: 40px ;
  }
  * {
    border-radius: 10px;
  }
`

export const Search = styled.textarea`
  resize: none;
  width: 45%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  background-color: white;
  border: 0px;
`
export const Contain = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 90%;
`