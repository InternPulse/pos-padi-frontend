import { Outlet } from "react-router-dom";
import { Flex, Box, Spinner, Text, VStack, IconButton } from "@chakra-ui/react";
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
import { useState, useEffect } from "react";
import UserContext from "@/context/UserContext";
import { getUserSummary } from "@/backend-functions/useractions-api";

function Layout() {
  const { setAuth } = useAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    getUserSummary()
      .then((data) => {
        // console.log(data.user.email);
        return {
          id: data.user.email || data.user.user_id.agent_id,
          name: data.user.first_name
            ? `${data.user.first_name} ${data.user.last_name}`
            : `${data.user.user_id.first_name} ${data.user.user_id.last_name}`,
          email: data.user.email || data.user.user_id.email,
          avatar: data.user.photo || data.user.user_id?.photo,
          role:
            (data.user.role || data.user.user_id.role) == "owner"
              ? "admin"
              : data.user.role || data.user.user_id.role,
        };
      })
      .then((data) => {
        // console.log(data);
        if (!ignore) {
          setUser(data);
          setError(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setUser(null);
      })
      .finally(() => {
        if (!ignore) {
          setIsLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleLogout = (e) => {
    //Function to logout user. Triggered by clicking the logout button

    logoutUser();
    setAuth(false);
  };

  function LoadingSpinner() {
    return (
      <Flex
        justify={"center"}
        align={"center"}
        width={"100vw"}
        height={"100vh"}
      >
        <VStack colorPalette="green">
          <Spinner color="colorPalette.600" size={"xl"} borderWidth={"3px"} />
          <Logo isConcise={true} />
          <Text
            textStyle={"sm"}
            fontWeight={"semibold"}
            italic
            color="gray.600"
          >
            Loading...
          </Text>
        </VStack>
      </Flex>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Flex justify={"center"} align={"center"} w={"100vw"} h={"100vh"}>
        <VStack>
          <Text fontWeight={"semibold"}>Error: {error}</Text>
          <Text textStyle={"sm"}>Consider refreshing page</Text>
        </VStack>
      </Flex>
    );
  }

  return (
    // $ Changed the width of the parent Flex container to 100% instead of 100vw, this prevent the overflow of the components on the pages.
    <UserContext user={user}>
      <Flex width={"100%"} height={"100%"}>
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
              <NotificationsDrawer />
              <Flex
                height={{ base: "40px", lg: "60px" }}
                width={{ base: "40px", lg: "180px" }}
                align={"center"}
              >
                {/*Awaiting Avatar Component */}
                <Box display={{ base: "none", lg: "block" }}>
                  <UserAvatar user={user} />
                </Box>
                <Box display={{ base: "block", lg: "none" }}>
                  <UserAvatarBrief user={user} />
                </Box>
                <IconButton
                  display={{ base: "none", lg: "flex" }}
                  variant={"ghost"}
                  onClick={handleLogout}
                >
                  <LuLogOut />
                </IconButton>
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
                <Outlet context={{ user }} />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </UserContext>
  );
}

export default Layout;
