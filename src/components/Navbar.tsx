import {
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
} from "@blueprintjs/core";

const NavbarComponent = () => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align="left">
        <NavbarHeading>Jake's Portfolio</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align="right">
        <Button className={Classes.MINIMAL}>Intro</Button>
        <Button className={Classes.MINIMAL}>Project</Button>
        <Button className={Classes.MINIMAL}>Contact</Button>
      </NavbarGroup>
    </Navbar>
  );
};

export default NavbarComponent;
