import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TavarCatigoryEnd from "../tavarCatigoryEnd/tavarCatigoryEnd";
import { Box } from "@chakra-ui/react";
import TovarFirmalar from "../tovarFirmalar/tovarFirmalar";
import PropsTable from "../propsTAble/propsTable";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import Hodimlar from "../hodimlar/hodimlar";
import { API } from "../api/api";
import Status from "../status/status";
import Valyuta from "../valyuta turi/Valyuta";

const Asosiybody = () => {
  const toast = useToast()
  const [tabsId,setTabsId] = useState([])
  const [checkVal, setCheckVal] = useState([])
  // console.log(tabsId);
  const handleValCheck = () => {
    axios.post(`${API}api/category/attach`, {
      "categoryId": tabsId,
      "productCategoryTypes": checkVal
    } ,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => {
      toast({
        description: `${res.data.message}`,
        status: 'success',
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      })
    }).catch((err) => {

    })
  }


  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios
  //     .get(`${API}api/category`, {
  //       headers: {
  //         // "ngrok-skip-browser-warning": true,
  //         // "Access-Control-Allow-Origin": "*",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //       setDa(res.data)
  //     });
  // }, []);

  return (
    <Box p={'40px'} pt={'0px'} height={'100%'} width={'100%'}>  
      {/* birinvhi table */}
      <Tabs variant='red' >
        <TabList >
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Tovar sotiladigan qurilmalar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Tovar kategoriyalar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Tovar turlari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Kategoriya turlar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Sotuv miqdor turlari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Tovar firmalari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
            Lavozimlar
          </Tab>

          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
          Hodimlar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
         Satatus
          </Tab>

          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00' }}
          >
         Valyuta turi
          </Tab>
        </TabList>

        <TabPanels >
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            <Box >
              {/* TOVAR SOTILADIGAN QURULMALAR */}
              <PropsTable title={'Tovar sotiladigan qurilmalar'} apiGet={'api/device-type'} apiPost={'api/device-type/new'} apiPostDoc={'api/device-type/upload'} />
              {/* TOVAR SOTILADIGAN QURULMALAR */}

            </Box>
          </TabPanel> 
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {/* TOVAR KATEGORIYALARI */}
            <PropsTable title={'Tovar kategoriyalar'} apiGet={'api/category'} apiPost={'api/category/new'} apiPostDoc={'api/category/upload'} />
            {/* TOVAR KATEGORIYALARI */}

          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {/* TOVAR TURLARI */}
            <PropsTable title={'Tovar turlari'} apiGet={'api/category-types'} apiPost={'api/category-types/new'} apiPostDoc={'api/category-types/upload'} />
            {/* TOVAR TURLARI */}

          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            <TavarCatigoryEnd  setTabsId={setTabsId} handleValCheck={handleValCheck} />
          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {/* SOTUV TURLARI */}
            <PropsTable title={'Sotuv miqdor turlari'} apiGet={'api/unit'} apiPost={'api/unit/new'} apiPostDoc={'api/unit/upload'} />
            {/* SOTUV TURLARI */}
          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}>
            <TovarFirmalar />
          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {/* LAVOZIMLAR */}
            <PropsTable title={'Lavozimlar'} apiGet={'api/stuff'} apiPost={'api/stuff/new'} />
            {/* LAVOZIMLAR */}

          </TabPanel>


          <TabPanel maxWidth={"1832px"} m={"auto"}>
            <Hodimlar  />
          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}>
            <Status />
          </TabPanel>
          
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            <Valyuta />
          </TabPanel>
          

        </TabPanels>
      </Tabs>

    </Box>
  );
}

export default Asosiybody