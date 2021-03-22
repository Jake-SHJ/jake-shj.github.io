import "antd/dist/antd.css";
import { Layout, Menu, Card, Avatar } from "antd";
import Icon from "./components/Icon";
import {
  StyledLayout,
  StyledHeader,
  StyledSider,
  StyledContent,
} from "./components/Layout";
import { StyledItem } from "./components/Menu";
import { mapAvatarColor, mapMenus } from "./constants";

const App = () => {
  return (
    <div className="App">
      <Card style={{ border: 0 }}>
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
              <Menu.SubMenu key="sub" title="Jake's Portfolio">
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
            <StyledHeader></StyledHeader>
            <StyledContent></StyledContent>
          </Layout>
        </StyledLayout>
      </Card>
    </div>
  );
};

export default App;
