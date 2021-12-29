import Layout from "Layout";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const projects = [
  {
    title: "IKnowASpot",
    href: "https://iknowaspot.xyz/home",
    image: "/img/iknowaspotlogo.png",
    description: `
    A full-stack application using the Spring boot framework,
    allowing users to view the best user-submitted spots in their
    area. For the back-end, it integrates Java, Spring MVC,
    Thymeleaf Security, a MySQL relational database, and full CRUD
    functionality. In a team of 4, we were involved in the full
    software development life cycle including planning,
    requirement gathering, coding, testing, and implementation.
    `,
  },
  {
    title: "Adlister",
    href: "https://github.com/iknsk-adlister/adlister-project",
    image: "/img/iknowaspotlogo.png",
    description: `
    An ad listing website developed in Java with interdependent servlets, JSPs, Beans, DAOs, and Factories to create a full-stack web application. The ad lister is multifunctional for the user and the viewer. A viewer can create a profile with a username, email, and password, as well as view and search for ads. A user may create their own ads with the ability to edit and delete them as well as update their profile. `,
  },
  {
    title: "Movie Project",
    href: "https://github.com/shelby-ian/movies-project",
    image: "/img/iknowaspotlogo.png",
    description: `
    A movie review website created using JavaScript, Jquery, HTML, and CSS. The viewer is able to search through movie cards, read their summaries and ratings, as well as add their own movie cards, summaries, and reviews. 
    `,
  },
  {
    title: "Weather Map",
    href: "https://github.com/sh3lbsd/codeup-web-exercises/blob/main/weather_map.html",
    image: "/img/iknowaspotlogo.png",
    description: `
    Weather map displays an eight day real time forecast for whichever location the user chooses. It includes a drag and drop marker that can retrieve forecast data from anywhere on the map as well as a search bar. The forecast data includes; the current date, sky description, temperature, humidity, wind speed, and air pressure. This was a solo project using Mapbox API. OpenWeatherApp API, JavaScript, HTML, and CSS.  
    `,
  },
];

export default function Projects() {
  return (
    <Layout>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <Card key={project.href} sx={{ maxWidth: 300 }}>
            <a href={project.href} target="_blank" rel="noreferrer">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt="project image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
