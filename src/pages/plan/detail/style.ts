import styled from "styled-components";
import { AccentButton } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { ScrollBar } from "../../../components/common/scrollBar/style";
import { AccentText } from "../../../components/common/text/style";

export const Wrap = styled.div`
  ${Container}
`;

export const PlanInfoImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const PlanInfo = styled.div`
  ${Container}
  max-width: 900px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding-top: 75px;
  hr {
    margin: 65px 0 75px;
  }
`

export const PlanTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
`

export const PlanCategory = styled(AccentText)`
  font-weight: bold;
`

export const PlanContent = styled.div`
  flex: auto;
  white-space: pre-wrap;
  word-break: break-all;
  border-radius: 15px;
  padding-top: 10px;
  ${ScrollBar}
`

export const PlanConsultButton = styled(AccentButton)`
  margin-top: 50px;
  width: 100%;
  max-width: 225px;
  align-self: center;
  padding: 8px;
  font-size: 19px;
`

export const PlanImageList = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  hr {
    margin: 100px 0 50px;
  }
`;

export const PlanImageItem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  img {
    max-width: 100%;
  }
`;

export const PlanBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
  @media screen and (max-width: 760px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  ${PlanConsultButton} {
    margin: 0;
  }
`;

export const PlanShareWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    width: 30px;
    height: 30px;
  }
`;
