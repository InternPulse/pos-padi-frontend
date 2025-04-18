import { Center, Image } from "@chakra-ui/react";
import largeLogo from "../../assets/logo-lg.png";
import baseLogo from "../../assets/logo-base.png";

function Logo({ isConcise }) {
  const logo = isConcise ? baseLogo : largeLogo;

  return (
    <Center width={"100%"} height={{ base: "56px", lg: "100px" }}>
      <Image
        src={logo}
        alt="POS Padi Logo"
        height={{ base: "28px", md: "36px", lg: "40px" }}
      />
    </Center>
  );
}

export default Logo;
