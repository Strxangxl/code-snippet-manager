import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import Layout from "@/layout";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorModeProvider>
      </ChakraProvider>
    </motion.div>
  );
}
