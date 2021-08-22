import type { NextPage } from "next";
import Layout from "../components/Layout";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { home } from "../../config";

const Home: NextPage = () => {
  const About = home.about;
  return (
    <Layout
      header={
        <>
          <title>{home.name}</title>
          <meta name="description" content={home.description} />
          <meta name="author" content={home.name} />
        </>
      }
    >
      <Flex direction="column" py={6}>
        <Avatar size="xl" name={home.name} src={home.avatar} />
        <Heading as="h1" fontWeight={500} mt={6} fontFamily="Comic Sans MS">
          {home.name}
        </Heading>
        <Text color="gray.500" mt={1}>
          {home.bio}
        </Text>
        <Box mt={2}>
          <About />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;
