import trianglify from "trianglify";
import React from "react";
import styles from "styles/layout.module.css";
import Link from "next/link";

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
  return (
    <div className={styles.page} ref={body}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/art">Art</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
