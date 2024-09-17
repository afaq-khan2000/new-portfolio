import { Box, Button, Container, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { bannerBg, NavLogo } from "../../assets/images";
import { ArrowForwardIos } from "@mui/icons-material";
import useOnScreen from "../../hooks/useOnScreen";

function Banner() {
  const [availableBtnBgColor, setAvailableBtnBgColor] = useState("primary.main");

  const scrollToContact = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        display: "flex",
      }}
      data-aos="fade-up"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.2)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", md: "30px" } }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "row" }, justifyContent: { xs: "space-between", md: "space-between" }, alignItems: { xs: "center", md: "center" } }}>
            {/* <Box
                component="img"
                src={NavLogo}
                alt="logo"
                sx={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  marginRight: "20px",
                }}
              /> */}
            <Typography
              // variant="bebus"
              sx={{
                color: "primary.main",
                fontSize: { md: "48px", xs: "36px" },
                letterSpacing: "1px",
                fontWeight: 700,
              }}
            >
              AK.
            </Typography>
            <Button variant="primary" onClick={() => scrollToContact("contact")}>
              CONTACT
            </Button>
          </Box>

          {/* TEXT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", lg: "60%" },
              px: { xs: 0, lg: "60px" },
              height: "calc(100vh - 100px)",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "60px", md: "120px" },
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                FULL STACK
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "60px", md: "120px" },
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                WEB DEVELOPER
              </Typography>
            </Box>
            <Typography
              variant="normal"
              sx={{
                color: "secondary.main",
                fontSize: { xs: "14px", md: "20px" },
                fontWeight: 400,
              }}
            >
              I am a Full Stack Web Developer with a passion for creating beautiful and functional websites. I have a strong foundation in web development technologies and programming languages such as HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and more. I am always eager to learn new technologies and improve my skills to create better user experiences.
            </Typography>
            <Button
              onClick={() => scrollToContact("work-method")}
              variant="hover-btn"
              sx={{
                fontSize: { xs: "14px", md: "22px" },
              }}
            >
              LEARN MORE ABOUT ME
              <ArrowForwardIos sx={{ fontSize: { xs: "14px", md: "22px" }, ml: "10px" }} />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
