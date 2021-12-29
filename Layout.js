import trianglify from "trianglify";
import React from "react";
import styles from "styles/layout.module.css";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import MoreIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";

const NavbarActions = [
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/art",
    label: "Art",
  },
];

const SidebarActions = [
  {
    name: "Linked In",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/shelby-davis-web-dev/",
  },
  {
    name: "Github",
    icon: <GitHubIcon />,
    href: "https://github.com/sh3lbsd",
  },
  {
    name: "Email",
    icon: <EmailIcon />,
    href: "mailto:shelby.e.davis95@gmail.com",
  },
  {
    name: "Resume",
    icon: <ArticleIcon />,
    href: "https://firebasestorage.googleapis.com/v0/b/shelby-davis-portfolio.appspot.com/o/shelby_davis_resume%20(1).pdf?alt=media&token=f4e17fea-a02a-4cb8-b719-d3ceabc3b6a9",
  },
];

export default function Layout({ children }) {
  // Gives a reference to a dom element
  const body = React.useRef();
  // equivalent document.ready in jquery
  // wait to run function until the page loads
  React.useEffect(() => {
    // https://www.npmjs.com/package/trianglify
    const pattern = trianglify({
      width: window.innerWidth,
      height: window.innerHeight,
      xColors: ["#90b", "#0ff", "#90b"],
    }).toCanvas();
    pattern.classList.add(styles.page);
    body.current.appendChild(pattern);
  }, [body]);

  const [sideBarIsOpen, setSidebarIsOpen] = React.useState(true);

  return (
    <div className={styles.page} ref={body}>
      {children}
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <IconButton color="inherit">
            <Link href="/" passHref>
              <HomeIcon fontSize="large" />
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {NavbarActions.map((action) => (
            <MenuItem key={action.href}>
              <Link href={action.href}>{action.label}</Link>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        color="secondary"
        sx={{ position: "fixed", bottom: 80, left: 4 }}
        //dial changes when clicked on
        icon={<SpeedDialIcon icon={<MoreIcon />} openIcon={<CloseIcon />}/>}
        open={sideBarIsOpen}
        onClick={() => setSidebarIsOpen(!sideBarIsOpen)}
      >
        {SidebarActions.map((action) => (
          <SpeedDialAction
            key={action.href}
            icon={
              <a href={action.href} target="_blank" rel="noreferrer">
                {action.icon}
              </a>
            }
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
