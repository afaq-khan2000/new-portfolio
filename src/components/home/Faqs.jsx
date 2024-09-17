import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FAQ1 } from "../../assets/images";
import Accordian from "../global/Accordian";

function Faqs() {
  const items = [
    {
      title: "What services do you offer?",
      description: "I specialize in full stack web development, creating responsive websites, and web applications. My services include front-end and back-end development, API integration, and more.",
    },
    {
      title: "What technologies do you work with?",
      description: "I work with a wide range of technologies, including React, Node.js, Express, MongoDB, Sequelize, and other modern tools to build robust and scalable applications.",
    },
    {
      title: "Can you work on existing projects?",
      description: "Yes, I can help you improve or expand upon your existing projects, whether it’s updating the design, adding new features, or optimizing performance.",
    },
    {
      title: "How long does it take to complete a project?",
      description: "The timeline for a project depends on its complexity and scope. After understanding your requirements, I can provide an accurate estimate of the completion time.",
    },
    {
      title: "Do you provide ongoing support after the project is completed?",
      description: "Yes, I offer ongoing maintenance and support to ensure your website or application remains up-to-date and runs smoothly after launch.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        backgroundColor: "primary.background",
        mt: "100px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", lg: "90px" } }}>
          <Box
            component={"img"}
            src={FAQ1}
            alt="work process"
            sx={{
              height: { xs: "200px", md: "500px" },
              width: "100%",
              objectFit: "cover",
              objectPosition: "center 100%",
              filter: "grayscale(100%) brightness(0.5)",
              borderRadius: "10px",
            }}
            data-aos="fade-up"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: "20px", md: "120px" },
              mt: "50px",
              flexDirection: { xs: "column", md: "row" },
            }}
            data-aos="fade-right"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: { xs: "100%", md: "45%" },
              }}
            >
              <Typography variant="bebus" sx={{ color: "secondary.main", fontSize: { md: "32px", xs: "20px" }, letterSpacing: "-2px", fontWeight: 700 }}>
                FREQUENTLY ASKED QUESTIONS
              </Typography>
              <Typography variant="normal" sx={{ color: "secondary.main", fontSize: { md: "14px", xs: "12px" } }}>
                You're not the only one who wants to know more about my services. Over the past few years, I've collected common questions. Is your question and answer not among them? Please contact me.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", width: { xs: "100%", md: "45%" } }}>
              <Accordian items={items} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Faqs;
