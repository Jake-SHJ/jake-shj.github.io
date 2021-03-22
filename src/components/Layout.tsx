import styled from "styled-components";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

export const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

export const StyledHeader = styled(Header)`
  border-radius: 0 10px 0 0;
`;

export const StyledSider = styled(Sider)`
  overflow: auto;
  height: 90vh;
  left: 0;
  border-radius: 10px 0 0 10px;
  padding: 18px 12px;
`;

export const StyledContent = styled(Content)`
  border-radius: 0 0 10px 0;
  background-color: #f0f2f5;
`;
