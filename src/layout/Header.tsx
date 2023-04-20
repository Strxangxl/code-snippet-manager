import { MouseEvent } from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<RiMoonFill />, <RiSunFill />);

  const handleClickToggle = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    toggleColorMode();
  };

  return (
    <Box as="header" position="fixed" top={0} zIndex={5} width="full">
      <Flex layerStyle="layoutBlock" alignItems="center" justifyContent="flex-end">
        <IconButton
          aria-label="theme toggle"
          icon={toggleIcon}
          onClick={handleClickToggle}
          backgroundColor="transparent"
        />
      </Flex>
    </Box>
  );
};

export default Header;
