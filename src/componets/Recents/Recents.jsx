import React from "react";
import cardImage from "../../assets/vita.webp";
import postImage2 from "../../assets/vita.webp";
import postImage1 from "../../assets/vita.webp";
import postImage3 from "../../assets/vita.webp";
import postImage4 from "../../assets/vita.webp";
import { Box, Grid, Container } from "@mui/material";
import Card from "../Card/Card";

const Recents = () => {
  return (
    <Box>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          <Grid item>
            <Card cardImage={postImage3} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card cardImage={postImage1} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card cardImage={postImage2} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card cardImage={postImage4} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card cardImage={cardImage} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Recents;
