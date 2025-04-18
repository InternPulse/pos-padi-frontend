import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

//Test Components
import NotificationButton from "@/components/header-components/NotificationButton";
import MenuButton from "@/components/header-components/MenuButton";
import Logo from "@/components/header-components/Logo";
import PageTitle from "@/components/header-components/PageTitle";

function Layout() {
  return (
    <Flex width={"100vw"} height={"100vh"}>
      <Flex
        width={{ lg: "200px", xl: "260px" }}
        display={{ base: "none", lg: "flex" }}
        direction={"column"}
      >
        {/* Desktop Navigation */}
        <Logo isConcise={false} />
      </Flex>
      <Flex
        direction={"column"}
        width={{
          base: "100vw",
          lg: "calc(100vw - 200px)",
          xl: "calc(100vw - 260px)",
        }}
      >
        <Flex
          px={{base: 3, lg: 5}}
          height={{ base: "56px", sm: "80px" }}
          gap={{base: 5, md: 5}}
          width={"100%"}
          justify={"flex-end"}
          align={"center"}
        >
          {/* Header */}

          <Box display={{ base: "block", lg: "none" }} mr={'auto'}>
            <Logo />
          </Box>
          <Box mr={'auto'} display={{base: 'none', lg: 'block'}}>
            <PageTitle />
          </Box>
          <NotificationButton count={49} />


          <Box height={{base: '40px', lg: '60px'}} width={{base: '40px', lg: '180px'}} bg='gray.300'>
            {/*Awaiting Avatar Component */}
          </Box>
          
          
          <Box display={{base: 'block', lg: 'none'}}>
            <MenuButton />
          </Box>
        </Flex>
        <Box
          bg="gray.100"
          minH={{ base: "calc(100vh - 56px)", sm: "calc(100vh - 80px)" }}
        >
          <Box display={{base: 'block', lg: 'none'}} p={2}>
            <PageTitle />
          </Box>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Layout;
