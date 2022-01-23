import styled from "styled-components";
import { Layout } from "antd";
const { Sider, Content } = Layout;

export const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

export const StyledSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  left: 0;
  padding: 18px 12px;
`;

export const StyledContent = styled(Content)`
  background-color: #f0f2f5;
`;
