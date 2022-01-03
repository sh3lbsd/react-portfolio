import GLImage from "GL/scene";
import styles from "styles/art.module.css";
import Layout from "Layout";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const image1 = "/img/finalform.jpeg";

// How to make 3D effects with three js
// https://tympanus.net/codrops/2020/03/17/create-a-wave-motion-effect-on-an-image-with-three-js/

export default function Art() {
  const [image, setImage] = React.useState(false);
  return (
    <Layout>
      <Modal
        open={image}
        onClose={() => setImage(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ width: 300, margin: "20px auto", position: "relative" }} className={styles.card}>
          <CardMedia
            component="img"
            height="400"
            image={image}
            alt="project image"
          />
          <CardContent
            className={styles.cardTitle}
          >
            <Typography variant="h6" color="white">
              Fairy Mary
            </Typography>
          </CardContent>
        </Card>
      </Modal>
      <div className={styles.grid}>
        <div className={styles.square} onClick={() => setImage(image1)}>
          <GLImage images={image1} className={styles.scene}></GLImage>
        </div>
      </div>
    </Layout>
  );
}
