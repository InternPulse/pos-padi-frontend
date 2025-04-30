import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";

// Filter Criteria
export function filterRow(obj, search) {
  let meetsCriteria;

  if (
    obj.item1.toLowerCase().includes(search.toLowerCase()) ||
    obj.item2.toLowerCase().includes(search.toLowerCase()) ||
    obj.item3.toLowerCase().includes(search.toLowerCase()) ||
    obj.item5.toLowerCase().includes(search.toLowerCase()) ||
    obj.item6.toLowerCase().includes(search.toLowerCase()) ||
    search == ""
  ) {
    meetsCriteria = true;
  }

  return meetsCriteria;
}

function SearchByText({ searchText, setSearchText }) {
  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <InputGroup startElement={<LuSearch />}>
      <Input
        width={{base: '100%', md: "280px"}}
        rounded={"xl"}
        value={searchText}
        onChange={() => handleChange(event)}
        placeholder="Search by any field"
      />
    </InputGroup>
  );
}

export default SearchByText;
