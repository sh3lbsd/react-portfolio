import trianglify from "trianglify";
import React from "react";
import styles from "styles/layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  const body = React.useRef();
  React.useEffect(() => {
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
