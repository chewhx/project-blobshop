import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Link as GLink,
  Text,
  Container,
  Heading,
  Column,
  IconButton,
} from "gestalt";
import useWindowSize from "./useWindowSize";

const Nav = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <Container>
      <Box
        display="flex"
        wrap
        justifyContent="between"
        direction="row"
        paddingY={10}
        column={12}
      >
        <Column span={12} mdSpan={6}>
          <Box marginBottom={5}>
            <Heading size="lg" align={width <= 576 ? "center" : "start"}>
              <Link href="/">Blobshop</Link>
            </Heading>
          </Box>
        </Column>

        <Column span={12} mdSpan={6}>
          <Box
            display="flex"
            justifyContent={width <= 576 ? "center" : "end"}
            role="tablist"
          >
            {[
              ["logout", "/"],
              ["view-type-default", "/gallery"],
              ["pin", "/cart"],
            ].map(([icon, link], index) => (
              <Box
                color={router.pathname == link ? "darkWash" : undefined}
                display="inlineBlock"
                key={`nav-${index}`}
                rounding="pill"
              >
                <Box padding={1} rounding="pill">
                  <Link href={link}>
                    <span
                      style={{
                        color: router.pathname == link ? "white" : "darkGray",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      <IconButton
                        accessibilityLabel="nav-gallery"
                        icon={icon}
                        size="lg"
                      />
                    </span>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Column>
      </Box>
    </Container>
  );
};

export default Nav;
