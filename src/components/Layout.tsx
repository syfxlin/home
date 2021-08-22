import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  header?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ header, children }) => {
  return (
    <Container maxW="container.md">
      <Header>{header}</Header>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
