import React from "react";
import vitamines from "../../assets/vitamins.jpg";
import care from "../../assets/pharmacy.jpg";
import pharm from "../../assets/pharm.jpg";
import { Box, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${vitamines})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Vitamines
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${pharm})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Find a pharmacy
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${care})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Find Care
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
