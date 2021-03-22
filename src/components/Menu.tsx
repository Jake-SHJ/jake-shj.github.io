import styled from "styled-components";
import { Menu } from "antd";

export const StyledItem = styled(Menu.Item)`
  &&& {
    height: 30px;
    line-height: 30px;
    border-radius: 8px;
    padding-left: 8px !important;
  }
`;
