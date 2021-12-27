import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Link from "next/link";
import Layout from "Layout";
import LinkedInIcon from "svg-icons/linkedin.svg";
import GithubIcon from "svg-icons/github.svg";
import EmailIcon from "svg-icons/email.svg";
import ArticleIcon from '@mui/icons-material/Article';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Shelby Davis Portfolio</title>
      </Head>
      <div className={styles.outerRing}></div>
      <div className={styles.innerRing}>
        <strong>Shelby Davis</strong>
        <hr></hr>
        <strong>Full Stack Developer</strong>
        <div className={styles.icons}>
          <a title="LinkedIn"
            href="https://www.linkedin.com/in/shelby-davis-web-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a title="Github" href="https://github.com/sh3lbsd" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a title="Email" href="mailto:shelby.e.davis95@gmail.com">
            <EmailIcon />
          </a>
          <a title="Resume" href="https://firebasestorage.googleapis.com/v0/b/shelby-davis-portfolio.appspot.com/o/shelby_davis_resume%20(1).pdf?alt=media&token=f4e17fea-a02a-4cb8-b719-d3ceabc3b6a9">
            <ArticleIcon fontSize="large"/>
          </a>
        </div>
      </div>
    </Layout>
  );
}
