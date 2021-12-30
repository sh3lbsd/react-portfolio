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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

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
    icon: <LinkedInIcon style={{ fill: "e79191" }} />,
    href: "https://www.linkedin.com/in/shelby-davis-web-dev/",
  },
  {
    name: "Github",
    icon: <GitHubIcon style={{ fill: "e79191" }} />,
    href: "https://github.com/sh3lbsd",
  },
  {
    name: "Email",
    icon: <EmailIcon style={{ fill: "e79191" }} />,
    href: "mailto:shelby.e.davis95@gmail.com",
  },
  {
    name: "Resume",
    icon: <ArticleIcon style={{ fill: "e79191" }} />,
    href: "https://firebasestorage.googleapis.com/v0/b/shelby-davis-portfolio.appspot.com/o/shelby_davis_resume%20(1).pdf?alt=media&token=f4e17fea-a02a-4cb8-b719-d3ceabc3b6a9",
  },
];

export default function Layout({ children, showDial = true }) {
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

  const [target, setTarget] = React.useState(body.current);
  React.useEffect(() => setTarget(body.current), [body]);
  const trigger = useScrollTrigger({ target });

  return (
    <div className={styles.page} ref={body}>
      {children}
      <Slide direction="up" in={!trigger}>
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
      </Slide>
      {showDial && (
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          color="secondary"
          sx={{ position: "fixed", bottom: 80, left: 4 }}
          //dial changes when clicked on
          icon={
            <SpeedDialIcon
              icon={<MoreIcon style={{ fill: "white" }} />}
              openIcon={<CloseIcon style={{ fill: "white" }} />}
            />
          }
          open={sideBarIsOpen}
          onClick={() => setSidebarIsOpen(!sideBarIsOpen)}
        >
          {SidebarActions.map((action) => (
            <SpeedDialAction
              key={action.href}
              onClick={() => window.open(action.href, "_blank")}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      )}
    </div>
  );
}
