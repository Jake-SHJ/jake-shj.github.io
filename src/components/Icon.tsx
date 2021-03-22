import { UserOutlined, LaptopOutlined, MailOutlined } from "@ant-design/icons";

const Icon = (props: { type: string; style?: object }) => {
  const { type, style } = props;

  interface IconObject {
    [propsName: string]: any;
  }

  const mapTypeToIcons: IconObject = {
    userOutlined: <UserOutlined style={style} />,
    laptopOutlined: <LaptopOutlined style={style} />,
    mailOutlined: <MailOutlined style={style} />,
  };

  return mapTypeToIcons[type];
};

export default Icon;
