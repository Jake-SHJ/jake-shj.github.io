import "antd/dist/antd.css";
import styled from "styled-components";
import { Layout, Menu, Card, Avatar } from "antd";
import { UserOutlined, LaptopOutlined, MailOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 90vh;
  left: 0;
  border-radius: 10px 0 0 10px;
  padding: 18px 12px;
`;

const StyledHeader = styled(Header)`
  border-radius: 0 10px 0 0;
`;

const StyledContent = styled(Content)`
  border-radius: 0 0 10px 0;
  background-color: #f0f2f5;
`;

const StyledItem = styled(Menu.Item)`
  &&& {
    height: 30px;
    line-height: 30px;
    border-radius: 8px;
    padding-left: 8px !important;
  }
`;

const App = () => {
  return (
    <div className="App">
      <Card style={{ border: 0 }}>
        <StyledLayout>
          <StyledSider>
            <Avatar
              size={12}
              style={{
                backgroundColor: "rgb(252, 69, 69)",
                marginLeft: "8px",
              }}
            />
            <Avatar
              size={12}
              style={{
                backgroundColor: "rgb(252, 175, 36)",
                marginLeft: "8px",
              }}
            />
            <Avatar
              size={12}
              style={{
                backgroundColor: "rgb(40, 193, 49)",
                marginLeft: "8px",
              }}
            />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub"]}
            >
              <div style={{ height: "30px" }}></div>
              <Menu.SubMenu key="sub" title="Jake's Portfolio">
                <StyledItem key="1">
                  <UserOutlined style={{ marginRight: "8px" }} />
                  Intro
                </StyledItem>
                <StyledItem key="2">
                  <LaptopOutlined style={{ marginRight: "8px" }} />
                  Project
                </StyledItem>
                <StyledItem key="3">
                  <MailOutlined style={{ marginRight: "8px" }} />
                  Contact
                </StyledItem>
              </Menu.SubMenu>
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
