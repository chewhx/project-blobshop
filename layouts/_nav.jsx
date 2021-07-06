import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Heading, Column, IconButton } from "gestalt";
import useWindowSize from "../hooks/useWindowSize";

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
              ["pin", "/local"],
            ].map(([icon, link], index) => (
              <Box
                color={router.pathname == link ? "watermelon" : undefined}
                display="inlineBlock"
                key={`nav-${index}`}
                rounding="pill"
              >
                <Box padding={1} rounding="pill">
                  <Link href={link}>
                    <span
                      style={{
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      <IconButton
                        accessibilityLabel="nav-gallery"
                        icon={icon}
                        iconColor={router.pathname == link ? "white" : "gray"}
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
