import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Link from "next/link";
import Layout from "Layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import IconButton from "@mui/material/IconButton";

export default function Home() {
  return (
    <Layout showDial={false}>
      <Head>
        <title>Shelby Davis Portfolio</title>
      </Head>
      <div className={styles.outerRing}></div>
      <div className={styles.innerRing}>
        <strong>Shelby Davis</strong>
        <hr></hr>
        <strong>Full Stack Developer</strong>
        <div className={styles.icons}>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/shelby-davis-web-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton color="inherit">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </a>
          <a
            title="Github"
            href="https://github.com/sh3lbsd"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton color="inherit">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <a title="Email" href="mailto:shelby.e.davis95@gmail.com">
            <IconButton color="inherit">
              <EmailIcon fontSize="large" />
            </IconButton>
          </a>
          <a
            title="Resume"
            target="_blank"
            rel="noreferrer"
            href="https://firebasestorage.googleapis.com/v0/b/shelby-davis-portfolio.appspot.com/o/shelby_davis_resume%20(1).pdf?alt=media&token=f4e17fea-a02a-4cb8-b719-d3ceabc3b6a9"
          >
            <IconButton color="inherit">
              <ArticleIcon fontSize="large" />
            </IconButton>
          </a>
        </div>
      </div>
    </Layout>
  );
}
