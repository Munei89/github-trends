import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRepos } from "./slice";
import { Row, Col, Card, Avatar } from "antd";
import { ForkOutlined, StarOutlined, SyncOutlined } from "@ant-design/icons";
import selectState from "./selectors";
import { StyledInnerCard, StyledSpan } from "./styles";

export default function Home() {
  const dispatch = useDispatch();

  const { repos, loading } = selectState();

  useEffect(() => {
    dispatch(loadRepos());
  }, [dispatch]);

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
        <Col span={12} offset={6}>
          <Card title="Card title">
            {repos.map((a) => {
              return (
                <StyledInnerCard
                  type="inner"
                  title={`${a.username}/${a.repositoryName}`}
                  extra={<a href="#">More</a>}
                >
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
                      {a.totalStars}
                    </StyledSpan>
                  )}

                  {a.builtBy.length > 0 && (
                    <>
                      {a.builtBy.map((data) => (
                        <Avatar src={data.avatar} />
                      ))}
                    </>
                  )}
                </StyledInnerCard>
              );
            })}
          </Card>
        </Col>
      )}
    </Row>
  );
}
