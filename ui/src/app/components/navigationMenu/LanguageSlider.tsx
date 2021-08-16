import {
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Text,
  Button,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { currentLanguageState } from "app/global";

import GreekFlag from "app/assets/greek_flag.png";
import AmericanFlag from "app/assets/american_flag.png";
import { BiChevronDown } from "react-icons/bi";

export const LanguageSlider = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

  const currLang = useRecoilValue(currentLanguageState);
  const setCurrLang = useSetRecoilState(currentLanguageState);

  return (
    <Fade in={isOpen}>
      <Menu isLazy>
        <MenuButton bg="white" ml={2} as={Button} rightIcon={<BiChevronDown />}>
          {currLang === "gr" ? <GreekLanguage /> : <EnglishLanguage />}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              onClose();
              setTimeout(
                () => setCurrLang(currLang === "gr" ? "en" : "gr"),
                1000
              );
              setTimeout(() => onOpen(), 1000);
            }}
          >
            {currLang !== "gr" ? <GreekLanguage /> : <EnglishLanguage />}
          </MenuItem>
        </MenuList>
      </Menu>
    </Fade>
  );
};

const GreekLanguage = () => {
  return (
    <Center>
      <Image w="24px" h="16px" src={GreekFlag} alt="GreekFlag" />
      <Text ml={2} as="span">
        Ελληνικά
      </Text>
    </Center>
  );
};

const EnglishLanguage = () => {
  return (
    <Center>
      <Image w="24px" h="16px" src={AmericanFlag} alt="AmericanFlag" />
      <Text ml={2} as="span">
        English, USA
      </Text>
    </Center>
  );
};
