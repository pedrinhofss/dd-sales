import * as React from "react"
import {
  ChakraProvider,
  Box,
  extendTheme,
  Center,
  Heading,
  Text,
  Link,
  Image
} from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    bg_color: '#232323',
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="bg_color" h="100vh">
      <Box p={12}>
        <Center>
          <Image h="300" w="300" src="/shield.png" />
        </Center>
      </Box>
      <Center p={6}>
        <Heading textColor="white" size="4xl">Domains Defenders</Heading>
      </Center>
      <Center>
        <Box p={3}>
          <Text textColor="grey" fontSize="4xl">
            If your want to get this domain, send an email to <Link href="mailto:sales@domainsdefenders.org" textColor="blue.400">sales@domainsdefenders.org</Link>
          </Text>
        </Box>
      </Center>
    </Box>
  </ChakraProvider>
)
