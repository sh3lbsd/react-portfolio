import GLImage from "GL/scene";
import styles from "styles/art.module.css";
import Layout from "Layout";
const image1 = "/img/finalform.jpeg";

// How to make 3D effects with three js
// https://tympanus.net/codrops/2020/03/17/create-a-wave-motion-effect-on-an-image-with-three-js/

export default function Art() {
  return (
    <Layout>
      <div className={styles.grid}>
        <div className={styles.square}>
          <GLImage images={image1} className={styles.scene}></GLImage>
        </div>
      </div>
    </Layout>
  );
}
