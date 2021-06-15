import { StyledRow, StyledHeader } from "./styles";
import { Col } from "antd";

export default function Header() {
  return (
    <StyledRow>
      <Col span={24}>
        <StyledHeader>Trending</StyledHeader>
        <p>See what the GitHub community is most excited about today.</p>
      </Col>
    </StyledRow>
  );
}
