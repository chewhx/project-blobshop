import React from "react";
import { Text, Box, Link } from "gestalt";

const Footer = () => {
  return (
    <Box paddingY={12}>
      <Text align="center" weight="bold">
        {"Created by "}
        <Link inline href="https://chewhx.com/" target="blank">
          <Text align="center" color="blue" weight="bold">
            @chewhx
          </Text>
        </Link>
        {" with "}
        <Link inline href="https://nextjs.org/" target="blank">
          <Text align="center" color="gray" weight="bold">
            NextJS
          </Text>
        </Link>
        {" and "}
        <Link inline href="https://gestalt.netlify.app/" target="blank">
          <Text align="center" color="gray" weight="bold">
            {" Gestalt"}
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
