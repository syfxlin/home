import React from "react";
import { chakra, Text, VStack } from "@chakra-ui/react";
import data from "../../config/build-time.preval";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <VStack align="flex-end" py={4} borderTopWidth={1} direction="column">
      <Text color="gray.400" fontSize="sm">
        {year} © Otstar Lin. All rights reserved.
      </Text>
      <Text color="gray.400" fontSize="sm">
        This page designed and built with by{" "}
        <chakra.a href="https://ixk.me" apply="mdx.a">
          Otstar Lin
        </chakra.a>{" "}
        in 2021.
      </Text>
      <Text color="gray.400" fontSize="sm">
        Last updated on: {new Date(data.buildTime).toLocaleString()}.
      </Text>
    </VStack>
  );
};

export default Footer;
