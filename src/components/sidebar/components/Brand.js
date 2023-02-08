import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Text
              fontSize={"lg"}
              color={logoColor}
              fontWeight='bold'
              h='26px'
              w='175px'
              mx='32px'
              my='32px'
              >
              MultiChannel Admin
            </Text>
      {/* <HorizonLogo my='32px' color={logoColor} /> */}
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
