import { Flex, Text } from "@chakra-ui/react";
import Card from "@/components/alt/dashboard-components/Card";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";
import { IoPeopleOutline } from "react-icons/io5";

const agentsSummary = [
  {
    title: "Total Agents",
    amount: 47,
    icon: <IoPeopleOutline />,
    iconColor: { base: "blue.600", _dark: "blue.300" },
    iconBgColor: { base: "blue.50", _dark: "blue.800" },
    percent: -10,
    period: "month",
  },
  {
    title: "Active Agents",
    amount: 42,
    icon: <IoPeopleOutline />,
    iconColor: { base: "green.600", _dark: "green.300" },
    iconBgColor: { base: "green.50", _dark: "green.800" },
    percent: -10,
    period: "month",
  },
  {
    title: "Inactive Agents",
    amount: 5,
    icon: <IoPeopleOutline />,
    iconColor: { base: "red.600", _dark: "red.300" },
    iconBgColor: { base: "red.50", _dark: "red.800" },
    percent: 10,
    period: "month",
  },
];

const agentsList = {
  headings: {
    isHeader: true,
    item1: "ID",
    item2: "First Name",
    item3: "Last Name",
    item5: "Email",
    item6: "Phone Number",
  },
  items: [
    {
      isHeader: false,
      item1: "VDKJNKR12",
      item2: "Timilehin",
      item3: "Ojuromi",
      item5: "Timivibesojuromi@gmail.com",
      item6: "07055334567",
    },
    {
      isHeader: false,
      item1: "HDKLPQX34",
      item2: "Amaka",
      item3: "Okoro",
      item5: "amaka.okoro@example.com",
      item6: "08123456789",
    },
    {
      isHeader: false,
      item1: "JUKMQWE45",
      item2: "Ibrahim",
      item3: "Lawal",
      item5: "ibrahim.lawal@example.com",
      item6: "08034567890",
    },
    {
      isHeader: false,
      item1: "ZXCVBN67",
      item2: "Grace",
      item3: "Ene",
      item5: "grace.ene@example.com",
      item6: "09087654321",
    },
    {
      isHeader: false,
      item1: "POIUYT89",
      item2: "Samuel",
      item3: "Obasi",
      item5: "samuel.obasi@example.com",
      item6: "07099887766",
    },
    {
      isHeader: false,
      item1: "MLKJHG56",
      item2: "Chidera",
      item3: "Nwachukwu",
      item5: "chidera.nwachukwu@example.com",
      item6: "08111223344",
    },
    {
      isHeader: false,
      item1: "ASDFGH12",
      item2: "Lilian",
      item3: "Danladi",
      item5: "lilian.danladi@example.com",
      item6: "09022334455",
    },
    {
      isHeader: false,
      item1: "QWERTY34",
      item2: "Victor",
      item3: "Owens",
      item5: "victor.owens@example.com",
      item6: "08044556677",
    },
    {
      isHeader: false,
      item1: "ZMNXCV78",
      item2: "Ngozi",
      item3: "Mba",
      item5: "ngozi.mba@example.com",
      item6: "07066778899",
    },
    {
      isHeader: false,
      item1: "TREWQA90",
      item2: "Emmanuel",
      item3: "Fashola",
      item5: "emmanuel.fashola@example.com",
      item6: "08155667788",
    },
    {
      isHeader: false,
      item1: "VBNMAS23",
      item2: "Deborah",
      item3: "Aliyu",
      item5: "deborah.aliyu@example.com",
      item6: "09012233445",
    },
    {
      isHeader: false,
      item1: "XCVBNM43",
      item2: "Chuka",
      item3: "Ifeanyi",
      item5: "chuka.ifeanyi@example.com",
      item6: "07033445566",
    },
    {
      isHeader: false,
      item1: "POIUYT56",
      item2: "Fatima",
      item3: "Yusuf",
      item5: "fatima.yusuf@example.com",
      item6: "08122334455",
    },
    {
      isHeader: false,
      item1: "LKJHGF88",
      item2: "Joshua",
      item3: "Onyeka",
      item5: "joshua.onyeka@example.com",
      item6: "09034455667",
    },
    {
      isHeader: false,
      item1: "MNBVCX21",
      item2: "Blessing",
      item3: "Sani",
      item5: "blessing.sani@example.com",
      item6: "08045671234",
    },
    {
      isHeader: false,
      item1: "IUYTRE45",
      item2: "Tobi",
      item3: "Agbaje",
      item5: "tobi.agbaje@example.com",
      item6: "08166554433",
    },
    {
      isHeader: false,
      item1: "ZXCVMN32",
      item2: "Stephanie",
      item3: "Umeh",
      item5: "stephanie.umeh@example.com",
      item6: "07077889900",
    },
    {
      isHeader: false,
      item1: "QAZXSW65",
      item2: "Michael",
      item3: "Effiong",
      item5: "michael.effiong@example.com",
      item6: "08011224455",
    },
    {
      isHeader: false,
      item1: "EDCRFV87",
      item2: "Favour",
      item3: "Bassey",
      item5: "favour.bassey@example.com",
      item6: "08133445566",
    },
    {
      isHeader: false,
      item1: "LKJUIO90",
      item2: "Stanley",
      item3: "Chika",
      item5: "stanley.chika@example.com",
      item6: "07022334455",
    },
    {
      isHeader: false,
      item1: "MNBVCE78",
      item2: "Gloria",
      item3: "Uzo",
      item5: "gloria.uzo@example.com",
      item6: "08155667799",
    },
    {
      isHeader: false,
      item1: "BVCXZL99",
      item2: "Olumide",
      item3: "Babatunde",
      item5: "olumide.babatunde@example.com",
      item6: "09033445566",
    },
    {
      isHeader: false,
      item1: "KJHGFQ11",
      item2: "Rita",
      item3: "Eze",
      item5: "rita.eze@example.com",
      item6: "08066778899",
    },
    {
      isHeader: false,
      item1: "UIOYTRE3",
      item2: "Daniel",
      item3: "Uka",
      item5: "daniel.uka@example.com",
      item6: "08100011122",
    },
    {
      isHeader: false,
      item1: "POASDF76",
      item2: "Beatrice",
      item3: "Adigun",
      item5: "beatrice.adigun@example.com",
      item6: "07077881122",
    },
    {
      isHeader: false,
      item1: "CVBNML23",
      item2: "Henry",
      item3: "Uduak",
      item5: "henry.uduak@example.com",
      item6: "08034567789",
    },
    {
      isHeader: false,
      item1: "TREWQS45",
      item2: "Adaeze",
      item3: "Nwosu",
      item5: "adaeze.nwosu@example.com",
      item6: "08144332211",
    },
    {
      isHeader: false,
      item1: "XCDRTY98",
      item2: "Biodun",
      item3: "Kolawole",
      item5: "biodun.kolawole@example.com",
      item6: "09044556677",
    },
    {
      isHeader: false,
      item1: "ZQWSXEC1",
      item2: "Esther",
      item3: "Ike",
      item5: "esther.ike@example.com",
      item6: "08122233344",
    },
    {
      isHeader: false,
      item1: "WERTYU12",
      item2: "Osas",
      item3: "Imade",
      item5: "osas.imade@example.com",
      item6: "07088990011",
    },
    {
      isHeader: false,
      item1: "NBVCXZ09",
      item2: "Nnamdi",
      item3: "Eke",
      item5: "nnamdi.eke@example.com",
      item6: "08099887766",
    },
    {
      isHeader: false,
      item1: "OPIULK34",
      item2: "Zainab",
      item3: "Mustapha",
      item5: "zainab.mustapha@example.com",
      item6: "09011223344",
    },
    {
      isHeader: false,
      item1: "XPLKJU76",
      item2: "Yemi",
      item3: "Dare",
      item5: "yemi.dare@example.com",
      item6: "08166778899",
    },
    {
      isHeader: false,
      item1: "MDKSOW23",
      item2: "Chinonso",
      item3: "Obi",
      item5: "chinonso.obi@example.com",
      item6: "08033445566",
    },
    {
      isHeader: false,
      item1: "PLKJNB77",
      item2: "Joy",
      item3: "Afolabi",
      item5: "joy.afolabi@example.com",
      item6: "08177889900",
    },
    {
      isHeader: false,
      item1: "VBNMAS19",
      item2: "Tunde",
      item3: "Onwuegbuchulam",
      item5: "tunde.onwuegbuchulam@example.com",
      item6: "07066778899",
    },
    {
      isHeader: false,
      item1: "SWERTG91",
      item2: "Chika",
      item3: "Ihueze",
      item5: "chika.ihueze@example.com",
      item6: "08023412345",
    },
    {
      isHeader: false,
      item1: "TYUIOK66",
      item2: "Mira",
      item3: "Ekanem",
      item5: "mira.ekanem@example.com",
      item6: "08166778855",
    },
    {
      isHeader: false,
      item1: "SDRFTG22",
      item2: "Osahon",
      item3: "Erhabor",
      item5: "osahon.erhabor@example.com",
      item6: "07034568890",
    },
  ],
};

const Agents = () => {
  return (
    <Flex
      direction={"column"}
      width={"95%"}
      height={"100%"}
      px={{ base: 1, xl: 4 }}
      pb={8}
      gap={6}
      align={"center"}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "space-around", lg: "space-between" }}
        gap={5}
        wrap={"wrap"}
        width={"100%"}
        p={2}
        align={{ base: "center" }}

      >
        {agentsSummary.map((item) => (
          <Card {...item} />
        ))}
      </Flex>

      <Flex
        width={{base: '100%' , md: "90%"}}
        align={"start"}
        direction={"column"}
        p={4}
        bg={{ base: "white", _dark: "gray.900" }}
        gap={4}
        rounded={'xl'}

      >
        <Text textStyle={"md"} fontWeight={"semibold"}>
          Agents List
        </Text>
        <Flex
          width={"100%"}
          bg={"gray.200"}
          rounded="xl"
          height={"60px"}
        ></Flex>
        <GenericTable {...agentsList} />
      </Flex>
    </Flex>
  );
};

export default Agents;
