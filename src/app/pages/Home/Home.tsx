import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRepos, loadDevelopers } from "./slice";
import { Row, Col, Tabs, notification } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import selectState from "./selectors";
import ReposTab from "./ReposTab";
import DevelopersTab from "./DevelopersTab";
import { StyledLoadingCol } from "./styles";

const { TabPane } = Tabs;

export default function Home() {
  const dispatch = useDispatch();

  const { repos, developers, loading, error } = selectState();
  useEffect(() => {
    dispatch(loadRepos());
    dispatch(loadDevelopers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      notification["error"]({
        message: "Error",
        description: "Oops, There was an error loading the data.",
      });
    }
  }, [error]);

  if (loading) {
    return (
      <Row>
        <StyledLoadingCol
          md={{ span: 24, offset: 0 }}
          lg={{ span: 24, offset: 0 }}
          xl={{ span: 12, offset: 6 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <SyncOutlined spin />
        </StyledLoadingCol>
      </Row>
    );
  }
  return (
    <Row>
      <Col
        md={{ span: 24, offset: 0 }}
        lg={{ span: 24, offset: 0 }}
        xl={{ span: 12, offset: 6 }}
        sm={{ span: 24, offset: 0 }}
        xs={{ span: 24, offset: 0 }}
      >
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Repositeries" key="1">
            <ReposTab repos={repos} loading={loading} />
          </TabPane>
          <TabPane tab="Developers" key="2">
            <DevelopersTab developers={developers} loading={loading} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}
