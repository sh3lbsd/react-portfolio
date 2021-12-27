import Layout from "Layout";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Projects() {
  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <a
            href="https://iknowaspot.xyz/home"
            target="_blank"
            rel="noreferrer"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/img/iknowaspotlogo.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  IKnowASpot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A full-stack application using the Spring boot framework,
                  allowing users to view the best user-submitted spots in their
                  area. For the back-end, it integrates Java, Spring MVC,
                  Thymeleaf Security, a MySQL relational database, and full CRUD
                  functionality. In a team of 4, we were involved in the full
                  software development life cycle including planning,
                  requirement gathering, coding, testing, and implementation.
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    </Layout>
  );
}
