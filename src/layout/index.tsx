import type { ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      minHeight="100vh"
      paddingTop={24}
      paddingBottom={[160, 16]}
      transition="0.4s ease-out"
    >
        <Header />
      <Stack
        direction="column"
        alignItems="center"
        position="relative"
        zIndex={1}
        spacing={8}
      >
        <Box as="main" layerStyle="layoutBlock">
          {children}
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Layout;
