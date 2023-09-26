import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import { coin, coins, recive, report } from "../../assets";
function NavbarLinks() {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"50px"}>
     <Link>
        <Box
          display={"flex"}
          cursor={"pointer"}
          alignItems={"center"}
          gap={"14px"}
          pt={'10px'}
          pb={'5px'}
        >
          <Image src={coin} alt='Dan Abramov' />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Asosiy ma’lumotlar
          </Text>
        </Box>
      </Link>
     <Link>
        <Box
          display={"flex"}
          cursor={"pointer"}
          alignItems={"center"}
          gap={"14px"}
          pt={'10px'}
          pb={'5px'}
        >
           <Image src={coins} alt='Dan Abramov' />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Sotuv
          </Text>
        </Box>
      </Link>
     <Link>
        <Box
          display={"flex"}
          cursor={"pointer"}
          alignItems={"center"}
          gap={"14px"}
          pt={'10px'}
          pb={'5px'}
        >
          <Image src={recive} alt='Dan Abramov' />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Maxsulot qabuli
          </Text>
        </Box>
      </Link>
     <Link>
        <Box
          display={"flex"}
          cursor={"pointer"}
          alignItems={"center"}
          gap={"14px"}
          pt={'10px'}
          pb={'5px'}
        >
         <Image src={report} alt='Dan Abramov' />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Hisobotlar
          </Text>
        </Box>
      </Link>
    
    </Box>
  );
}

export default NavbarLinks;
