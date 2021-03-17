import "antd/dist/antd.css";
import styled from "styled-components";
import { Layout, Menu, Card } from "antd";
const { Header, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 90vh;
  left: 0;
  border-radius: 10px 0 0 10px;
`;

const StyledHeader = styled(Header)`
  border-radius: 0 10px 0 0;
`;

const StyledContent = styled(Content)`
  border-radius: 0 0 10px 0;
  background-color: #f0f2f5;
`;

const StyledItem = styled(Menu.Item)`
  && {
    height: 30px;
    line-height: 30px;
    border-radius: 8px;
  }
`;

const App = () => {
  return (
    <div className="App">
      <Card style={{ border: 0 }}>
        <StyledLayout>
          <StyledSider>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ padding: "0 12px" }}
            >
              <div style={{ height: "30px" }}></div>
              <StyledItem key="1">nav 1</StyledItem>
              <StyledItem key="2">nav 2</StyledItem>
              <StyledItem key="3">nav 3</StyledItem>
            </Menu>
          </StyledSider>
          <Layout>
            <StyledHeader></StyledHeader>
            <StyledContent></StyledContent>
          </Layout>
        </StyledLayout>
      </Card>
    </div>
  );
};

export default App;
