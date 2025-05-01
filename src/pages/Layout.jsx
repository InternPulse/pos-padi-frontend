import { Outlet } from "react-router-dom";
import { Flex, Box, Stack, IconButton } from "@chakra-ui/react";
// import NotificationButton from "@/components/header-nav-components/NotificationButton";
// import MenuButton from "@/components/header-nav-components/MenuButton";
import Logo from "@/components/header-nav-components/Logo";
import PageTitle from "@/components/header-nav-components/PageTitle";
import Navigation from "@/components/header-nav-components/Navigation";
import Advert from "@/components/header-nav-components/Advert";
import MobileNav from "@/components/header-nav-components/MobileNav";
import NotificationsDrawer from "@/components/header-nav-components/NotificationsDrawer";
import UserAvatar from "@/components/header-nav-components/UserAvatar";
import UserAvatarBrief from "@/components/header-nav-components/UserAvatarBrief";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "@/Authentication/AuthProvider";
import { logoutUser } from "@/backend-functions/useractions-api";

function Layout() {

  const {setAuth} = useAuth();

  const user = {
    id: "1",
    name: "John Mason",
    email: "john.mason@example.com",
    avatar: "https://i.pravatar.cc/300?u=iu",
    role: 'admin'
  }

  const handleLogout = (e) => {
    // e.preventDefault()
    logoutUser()
    // console.log("Hi")
    setAuth(false)
  }

  return (
    // $ Changed the width of the parent Flex container to 100% instead of 100vw, this prevent the overflow of the components on the pages.
    <Flex width={"100%"} height={"100%"} >
      <Flex
        width={{ lg: "200px", xl: "260px" }}
        display={{ base: "none", lg: "flex" }}
        direction={"column"}
        position={"fixed"}
        zIndex={10}
        bg={{ base: "white", _dark: "black" }}
        minH={"100vh"}
      >
        {/* Desktop Navigation */}
        <Box>
          <Logo isConcise={false} />
        </Box>

        <Navigation userRole={user.role} />
        <Advert />
      </Flex>
      <Flex
        direction={"column"}
        width={{
          base: "100vw",
          lg: "calc(100vw - 200px)",
          xl: "calc(100vw - 260px)",
        }}
        left={{ lg: "200px", xl: "260px" }}
        position={"absolute"}
        height={"100px"}
      >
        <Flex
          px={{ base: 3, lg: 5 }}
          height={{ base: "56px", sm: "80px" }}
          gap={{ base: 5, md: 5 }}
          // width={"100%"}
          width={{
            base: "100vw",
            lg: "calc(100vw - 200px)",
            xl: "calc(100vw - 260px)",
          }}
          justify={"space-between"}
          align={"center"}
          position={"fixed"}
          top={0}
          zIndex={10}
          bg={{ base: "white", _dark: "black" }}
        >
          {/* Header */}
          <Flex>
            <Box display={{ base: "block", lg: "none" }}>
              <Logo />
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              <PageTitle />
            </Box>
          </Flex>
          <Flex align={"center"} gap={5}>
            <NotificationsDrawer count={120} />
            <Flex
              height={{ base: "40px", lg: "60px" }}
              width={{ base: "40px", lg: "180px" }}
              align={'center'}
            >
              {/*Awaiting Avatar Component */}
              <Box display={{base: 'none', lg:'block'}}>

              <UserAvatar user={user} />
              </Box>
              <Box display={{base: 'block', lg:'none'}}>

              <UserAvatarBrief  user={user} />
              </Box>
              <IconButton display={{base: 'none', lg: 'flex'}} variant={'ghost'} onClick={handleLogout}><LuLogOut /></IconButton>
            </Flex>
            <Box display={{ base: "block", lg: "none" }}>
              {/* <MenuButton /> */}
              <MobileNav />
            </Box>
          </Flex>
        </Flex>
        <Flex
          justify={"center"}
          align={"start"}
          minH={"100vh"}
          bg={{ base: "gray.100", _dark: "gray.900" }}
          width={"100%"}
          position={"absolute"}
          top={{ base: "56px", sm: "80px" }}
        >
          <Box
            maxW={"1280px"}
            mx={"auto"}
            width={"100%"}
            // color={{base: 'black', _dark: 'white'}}
            // minH={{ base: "calc(100vh - 56px)", sm: "calc(100vh - 80px)" }}
          >
            <Box display={{ base: "block", lg: "none" }} p={2}>
              <PageTitle />
            </Box>
            <Flex justify={"center"} width={"100%"}>
              <Outlet />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
