import * as React from "react";
import { useHistory } from 'react-router-dom'
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  Button
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import People from '@mui/icons-material/People';

import Home from "@mui/icons-material/Home";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';


const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
  as = "button",
  ...props
}) => {
  const CustomButton = styled(as)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    textShadow: "none",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton {...props}>
    <span>
      {buttonText}
    </span>
  </CustomButton>;
};
export const Navbar = () => {
  let history = useHistory();

  const isLogin = localStorage.is_login ? true : false;

  const isAdmin =
    localStorage.is_admin === "true" ? true : false;

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });
  const logout = () => {
    history.push("/");
    localStorage.clear();
    document.location.reload();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const LOGIN_LINKS = [
    { icon: <Home />, label: 'Home', link: '/user/dash' },
    { icon: <AccountCircleIcon />, label: 'Profile', link: "/profile" },
  ];

  const ADMIN_LINKS = [
    { icon: <People />, label: 'Dashboard', link: '/admin/dashboard' },
    { icon: <FactCheckIcon />, label: 'Projects', link: "/admin/projects" },
    { icon: <AccountCircleIcon />, label: 'Profile', link: "/profile" },
    { icon: <People />, label: 'Clients', link: "/profile" },
  ];

  const MenuList = ({ links }) => {
    return (
      <List>
        {links.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={
              () => history.push(item.link)
            }
          >
            <ListItemIcon >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
            />
          </ListItemButton>
        ))}
      </List>
    )
  }
  const list = (anchor) => {
    return (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {isAdmin ?
          <MenuList links={ADMIN_LINKS} />
          : isLogin ? (
            <MenuList links={LOGIN_LINKS} />
          ) :
            null
        }
      </Box>
    );
  }

  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: "14px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#4F5361",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: "-10px",
    zIndex: "100",
    justifyContent: "space-between",
    backgroundColor: "#33415559",
    height: "9vh",
    padding: theme.spacing(5),
    "&.MuiContainer-root": {
      maxWidth: "100%",
    }
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  }));


  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", color: "#fff", fontWeight: "900" }}>
          {
            isLogin ?
              <>
                <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                <Drawer
                  anchor="left"
                  open={mobileMenu["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </>
              : null
          }
          <a
            href="/"
          >
            SUPPORT CONSTRUCTION
          </a>
        </Box>

        {isAdmin ?
          (<NavbarLinksBox>
            <NavLink variant="body2" to="/admin/dashboard">
              Dashboard
            </NavLink>
            <NavLink variant="body2" to="/admin/projects">
              projects
            </NavLink>
            <NavLink variant="body2" to="/profile">
              profile
            </NavLink>
            <NavLink variant="body2" to="/profile">
              clients
            </NavLink>
          </NavbarLinksBox>)
          : isLogin ? (
            <NavbarLinksBox>
              <NavLink variant="body2" to="/user/dash">Home</NavLink>
              <NavLink variant="body2" to="/profile">profile</NavLink>
            </NavbarLinksBox>
          ) : ""
        }
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {isLogin ? <CustomButton
          backgroundColor="#334155"
          color="#fff"
          onClick={() => logout()}
          buttonText="Register"
        /> :
          <>
            <CustomButton
              backgroundColor="#fff"
              color="#334155"
              onClick={() => history.push('/auth/login')}
              buttonText="Sign Up"
            />
            <CustomButton
              backgroundColor="#334155"
              color="#fff"
              onClick={() => history.push("/auth/register")}
              buttonText="Register"
            />
          </>
        }
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;