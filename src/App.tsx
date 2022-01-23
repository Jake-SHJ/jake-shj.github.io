import "antd/dist/antd.css";
import { Layout, Menu, Avatar } from "antd";
import Icon from "./components/Icon";
import { StyledLayout, StyledSider, StyledContent } from "./components/Layout";
import { StyledItem } from "./components/Menu";
import { mapAvatarColor, mapMenus } from "./constant/constants";
const { Header } = Layout;

const App = () => {
  return (
    <div className="App">
      <StyledLayout>
        <StyledSider>
          {mapAvatarColor.map((avatarColor) => {
            return (
              <Avatar
                key={avatarColor.key}
                size={12}
                style={{
                  backgroundColor: avatarColor.color,
                  marginLeft: "8px",
                }}
              />
            );
          })}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub"]}
          >
            <div style={{ height: "30px" }}></div>
            <Menu.SubMenu key="sub" title="Jake's Note">
              {mapMenus.map((menu) => {
                return (
                  <StyledItem key={menu.key}>
                    <Icon type={menu.icon} style={{ marginRight: "8px" }} />
                    {menu.text}
                  </StyledItem>
                );
              })}
            </Menu.SubMenu>
          </Menu>
        </StyledSider>
        <Layout>
          <Header></Header>
          <StyledContent></StyledContent>
        </Layout>
      </StyledLayout>
    </div>
  );
};

export default App;
