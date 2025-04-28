"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { Toaster } from "@/components/ui/toaster";

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Toaster />
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
