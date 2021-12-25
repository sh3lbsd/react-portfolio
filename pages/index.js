import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Link from "next/link";
import Layout from "Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.outerRing}></div>
      <div className={styles.innerRing}>
        <strong>Shelby Davis</strong>
        <hr></hr>
        <strong>Full Stack Developer</strong>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/shelby-davis-web-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <title>LinkedIn</title>
              <g>
                <path
                  d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </a>
          <a href="https://github.com/sh3lbsd" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="-74.4 -120.90175 644.8 725.4105"
            >
              <path
                d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="mailto:shelby.e.davis95@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              viewBox="0 0 50 50"
            >
              <path
                d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 7 C 15.07058 7 7 15.07058 7 25 C 7 34.92942 15.07058 43 25 43 C 28.495217 43 31.765776 42.001432 34.529297 40.273438 A 1.0001666 1.0001666 0 0 0 33.470703 38.576172 C 31.014224 40.112177 28.114783 41 25 41 C 16.15142 41 9 33.84858 9 25 C 9 16.15142 16.15142 9 25 9 C 33.84858 9 41 16.15142 41 25 C 41 30.444444 36.466667 34 32 34 C 30.341667 34 29.79961 33.34756 29.462891 32.367188 C 29.138232 31.421931 29.252321 30.108847 29.542969 29.294922 L 34.923828 16.384766 A 1.0001 1.0001 0 0 0 33.984375 14.986328 A 1.0001 1.0001 0 0 0 33.076172 15.615234 L 32.244141 17.613281 C 31.758892 16.685918 31.123118 15.931244 30.345703 15.373047 C 28.944073 14.366653 27.192697 14 25.287109 14 C 22.981909 14 20.26538 15.384509 18.005859 17.851562 C 15.746339 20.318616 14 23.939425 14 28.476562 C 14 30.490505 14.605189 32.361132 15.798828 33.75 C 16.992467 35.138868 18.788968 36 20.914062 36 C 23.352552 36 25.171204 35.127741 26.449219 33.951172 C 26.851532 33.580794 27.190584 33.183427 27.503906 32.779297 C 27.527231 32.857896 27.543477 32.937493 27.570312 33.015625 C 28.115344 34.602503 29.658333 36 32 36 C 37.533333 36 43 31.555556 43 25 C 43 15.07058 34.92942 7 25 7 z M 25.287109 16 C 26.935522 16 28.236317 16.318738 29.179688 16.996094 C 30.089214 17.649149 30.748458 18.671521 31.095703 20.369141 L 27.802734 28.271484 L 27.800781 28.275391 A 1.0001 1.0001 0 0 0 27.710938 28.466797 C 27.700241 28.494085 27.694001 28.527004 27.683594 28.554688 L 27.453125 29.109375 A 1.0001 1.0001 0 0 0 27.371094 29.238281 C 26.748153 30.376846 26.066438 31.584835 25.095703 32.478516 C 24.124968 33.372196 22.900575 34 20.914062 34 C 19.306157 34 18.146517 33.413148 17.316406 32.447266 C 16.486295 31.481384 16 30.089621 16 28.476562 C 16 24.4497 17.531193 21.333571 19.482422 19.203125 C 21.433651 17.072679 23.859309 16 25.287109 16 z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}
