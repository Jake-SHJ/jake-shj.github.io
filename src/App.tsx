import "antd/dist/antd.css";
import styled from "styled-components";
import { Card, Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 90vh;
  left: 0;
`;

const StyledCard = styled(Card)`
  padding: 0;
`;

const App = () => {
  return (
    <div className="App">
      <StyledCard>
        <Layout>
          <StyledSider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </StyledSider>
          <Layout>
            <Header></Header>
            <Content></Content>
          </Layout>
        </Layout>
      </StyledCard>
    </div>
  );
};

export default App;
