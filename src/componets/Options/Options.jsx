import React from "react";
import sign1 from "../../assets/s.png";
import sign2 from "../../assets/si.png";
import sign3 from "../../assets/sig.png";
import sign4 from "../../assets/sign.png";
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

const Options = () => {
  return (
    <Box>
      <Box>
        <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
          HEALTHY WINTER IS AHEAD!
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${sign1})` }}>
          <Link to="/stores">
            <Typography
              variant={"h6"}
              color="black"
              align="center"
              textDecoration="none"
            >
              Schedule <br /> vaccination(s)
            </Typography>
          </Link>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${sign2})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Find a pharmacy
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${sign3})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Find Care
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${sign4})` }}>
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

export default Options;
