import {
  Divider,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const linkColor = useColorModeValue("yellow.600", "yellow.300");

  return (
    <Flex
      as="footer"
      layerStyle="layoutBlock"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={8}>
        <Divider />
        <Text fontSize={["xs", "sm"]}>
          Created by{" "}
          <Link
            href="https://github.com/Strxangxl"
            target="_blank"
            fontWeight="bold"
            color={linkColor}
          >
            @Strxangxl
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
