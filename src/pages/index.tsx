import { Flex } from '@chakra-ui/react'
import { About } from '../components/About/about';
import { Header } from "../components/Header/header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <About />
    </Flex>
  )
}