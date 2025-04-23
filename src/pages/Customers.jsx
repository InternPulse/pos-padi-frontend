import React from "react";
import StateDropDown from "@/components/form/inputs/StateDropDown";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";


function Customers() {

  const headings = {
    isHeader: true,
    item1: 'Customer ID',
    item2: 'First Name',
    item3: 'Last Name',
    item4: 'Phone No'
  }

  const items = [
    { isHeader: false, item1: 'HDKJNKR12', item2: 'Quin', item3: 'Darlington', item4: '09155334727' },
    { isHeader: false, item1: 'XKDJDUE45', item2: 'Lena', item3: 'Smith', item4: '08023456789' },
    { isHeader: false, item1: 'ALWUEIR77', item2: 'Jake', item3: 'Johnson', item4: '08112345678' },
    { isHeader: false, item1: 'POIQWUE88', item2: 'Amara', item3: 'Okafor', item4: '09099887766' },
    { isHeader: false, item1: 'ZNBXKS90', item2: 'Mike', item3: 'Davies', item4: '07034567890' },
    { isHeader: false, item1: 'MNVCXW23', item2: 'Zara', item3: 'Bello', item4: '08122233445' },
    { isHeader: false, item1: 'QWEOPC67', item2: 'Chris', item3: 'Brown', item4: '09111222333' },
    { isHeader: false, item1: 'YUIWOP12', item2: 'Tobi', item3: 'Adams', item4: '07077665544' },
    { isHeader: false, item1: 'TREWQZ98', item2: 'Nina', item3: 'George', item4: '09033221100' },
    { isHeader: false, item1: 'PLMKOI56', item2: 'Felix', item3: 'Eze', item4: '08088990011' },
    { isHeader: false, item1: 'WERTYU34', item2: 'Halima', item3: 'Umar', item4: '08051236789' },
    { isHeader: false, item1: 'QAZXSW21', item2: 'Kevin', item3: 'Chukwudi', item4: '09067676767' },
    { isHeader: false, item1: 'EDCRFV56', item2: 'Aisha', item3: 'Yakubu', item4: '07012344321' },
    { isHeader: false, item1: 'MLPOIU90', item2: 'Peter', item3: 'Obi', item4: '08099887744' },
    { isHeader: false, item1: 'VBNMAS33', item2: 'Sandra', item3: 'Ifeanyi', item4: '08155544433' },
    { isHeader: false, item1: 'BNMVCD43', item2: 'Ibrahim', item3: 'Mohammed', item4: '08033445566' },
    { isHeader: false, item1: 'LKJHGF88', item2: 'Joy', item3: 'Adewale', item4: '09034455667' },
    { isHeader: false, item1: 'MNBVCX21', item2: 'Moses', item3: 'Ayodele', item4: '08045671234' },
    { isHeader: false, item1: 'ZXCVBN99', item2: 'Kemi', item3: 'Lawal', item4: '09166554433' },
    { isHeader: false, item1: 'ASDFGH35', item2: 'Uche', item3: 'Okon', item4: '08022334455' },
    { isHeader: false, item1: 'POIUYT78', item2: 'Debbie', item3: 'Nelson', item4: '07067891234' },
    { isHeader: false, item1: 'LKJPOI56', item2: 'Emeka', item3: 'Iroko', item4: '08033456789' },
    { isHeader: false, item1: 'OIUYTRE1', item2: 'Ada', item3: 'Nnaji', item4: '09077788899' },
    { isHeader: false, item1: 'XCVBNM44', item2: 'Gbenga', item3: 'Shittu', item4: '08155667788' },
    { isHeader: false, item1: 'QWERTY90', item2: 'Lilian', item3: 'Ekanem', item4: '08012312312' },
    { isHeader: false, item1: 'TYUIOP23', item2: 'Victor', item3: 'Abiola', item4: '08100099988' },
    { isHeader: false, item1: 'ERTYUI11', item2: 'Chinedu', item3: 'Agbo', item4: '08088877766' },
    { isHeader: false, item1: 'DFGHJK77', item2: 'Mary', item3: 'Okorie', item4: '07012233445' },
    { isHeader: false, item1: 'XDFRTY23', item2: 'Dan', item3: 'Afolabi', item4: '08166778899' },
    { isHeader: false, item1: 'NBVCXZ78', item2: 'Kate', item3: 'Danjuma', item4: '09012345678' },
    { isHeader: false, item1: 'QWEASD90', item2: 'Jide', item3: 'Osakwe', item4: '08022335577' },
    { isHeader: false, item1: 'ZXCASD12', item2: 'Blessing', item3: 'Yusuf', item4: '08144556677' },
    { isHeader: false, item1: 'MLKJHG34', item2: 'Bola', item3: 'Obasanjo', item4: '07088997766' },
    { isHeader: false, item1: 'IUYTRE56', item2: 'Ayo', item3: 'Moses', item4: '08021112233' },
    { isHeader: false, item1: 'OPASDF23', item2: 'Fola', item3: 'Ahmed', item4: '09112233445' },
    { isHeader: false, item1: 'XDCVFR89', item2: 'Remi', item3: 'Ogundipe', item4: '07044556677' },
    { isHeader: false, item1: 'YHNBGT65', item2: 'Isioma', item3: 'Okafor', item4: '08166779900' },
    { isHeader: false, item1: 'OKMNBV12', item2: 'Nonso', item3: 'Eze', item4: '08055667788' },
    { isHeader: false, item1: 'LPOIUY88', item2: 'Tope', item3: 'Shola', item4: '09033445566' }
  ];
  

  return (
    <GenericTable headings={headings} items={items} />
  );
}

export default Customers;
