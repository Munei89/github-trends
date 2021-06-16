import { Row, Col } from "antd";
import { SyncOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import {
  StyledInnerCard,
  StyledSpan,
  StyledLastCol,
  StyledAvatar,
  StyledButton,
  StyledText,
} from "../styles";
import { IDeveloper } from "types";

interface IDeveloperProps {
  developers: IDeveloper[];
  loading: boolean;
}

const DevelopersTab: React.FunctionComponent<IDeveloperProps> = ({
  developers,
  loading,
}) => {
  if (loading) {
    return (
      <Row>
        <Col span={24}>
          <SyncOutlined spin />
        </Col>
      </Row>
    );
  }
  return (
    <Row>
      {developers.length > 0 && (
        <Col span={24}>
          {developers.map((a) => {
            return (
              <StyledInnerCard type="inner" key={a.username}>
                <Row>
                  <Col md={8} xs={24} sm={24} lg={8}>
                    <Row>
                      <Col span={10}>
                        <StyledSpan>{a.rank}</StyledSpan>
                        <StyledAvatar
                          size={"large"}
                          src={a.avatar}
                          alt={a.username}
                        />
                      </Col>
                      <Col span={14}>
                        {a.name && <StyledText>{a.name}</StyledText>}
                        {a.username && <StyledText>{a.username}</StyledText>}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={8} xs={24} sm={24} lg={8}>
                    {a.popularRepository && (
                      <>
                        <StyledText>
                          <DeploymentUnitOutlined />{" "}
                          {a.popularRepository.repositoryName}
                        </StyledText>
                        <StyledText>
                          <strong>{a.popularRepository.description}</strong>
                        </StyledText>
                      </>
                    )}
                  </Col>
                  <StyledLastCol md={8} lg={8} sm={24} xs={24}>
                    <StyledButton>Follow</StyledButton>
                  </StyledLastCol>
                </Row>
              </StyledInnerCard>
            );
          })}
        </Col>
      )}
    </Row>
  );
};

export default DevelopersTab;
