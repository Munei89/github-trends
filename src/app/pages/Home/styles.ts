import styled from "styled-components";
import { Card, Col, Avatar, Button } from "antd";

export const StyledInnerCard = styled(Card)`
  margin: 16px 0;
`;

export const StyledSpan = styled.span`
  margin-right: 10px;
`;

export const StyledLastCol = styled(Col)`
  text-align: right;
  padding: 20px 0px;
`;

export const StyledAvatar = styled(Avatar)<{
  size?: string;
}>`
  margin-right: 10px;
  ${(p) =>
    p.size === "large" &&
    `width: 70px; 
        height:70px;
    `}
`;

export const StyledButton = styled(Button)`
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const StyledText = styled.p`
  margin-bottom: 5px;
`;
