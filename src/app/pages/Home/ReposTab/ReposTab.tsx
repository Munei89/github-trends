import { Row, Col } from "antd";
import { ForkOutlined, StarOutlined, SyncOutlined } from "@ant-design/icons";
import {
  StyledInnerCard,
  StyledSpan,
  StyledLastCol,
  StyledAvatar,
  StyledButton,
} from "../styles";
import { default as NumberFormat } from "react-number-format";
import { IRepositeries } from "types";

interface IReposProps {
  repos: IRepositeries[];
  loading: boolean;
}

const ReposTab: React.FunctionComponent<IReposProps> = ({ repos, loading }) => {
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
      {repos.length > 0 && (
        <Col span={24}>
          {repos.map((a) => {
            return (
              <StyledInnerCard
                type="inner"
                title={
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                  >{`${a.username}/${a.repositoryName}`}</a>
                }
                key={a.username}
              >
                <Row>
                  <Col md={20} xs={24} sm={24} lg={20}>
                    {a.description && <p>{a.description}</p>}

                    {a.language && <StyledSpan>{a.language}</StyledSpan>}
                    {a.forks && (
                      <StyledSpan>
                        <ForkOutlined />
                        {a.forks}
                      </StyledSpan>
                    )}
                    {a.totalStars && (
                      <StyledSpan>
                        <StarOutlined />

                        <NumberFormat
                          value={a.totalStars}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </StyledSpan>
                    )}

                    {a.builtBy.length > 0 && (
                      <>
                        {a.builtBy.map((data) => (
                          <a href={data.url} target="_blank" rel="noreferrer">
                            <StyledAvatar
                              key={data.username}
                              src={data.avatar}
                              alt={data.username}
                            />
                          </a>
                        ))}
                      </>
                    )}
                  </Col>
                  <StyledLastCol md={4} lg={4} sm={24}>
                    <StyledButton>
                      <StarOutlined />
                      Star
                    </StyledButton>
                    {a.starsSince && (
                      <div>
                        <StarOutlined />{" "}
                        <NumberFormat
                          value={a.starsSince}
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        stars today{" "}
                      </div>
                    )}
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

export default ReposTab;
