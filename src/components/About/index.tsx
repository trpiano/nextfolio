import { Box, Button, Flex, Icon, Image, Text} from "@chakra-ui/react";
import Head from "next/head";

import { FaPlay } from "react-icons/fa";
import { IconsRow } from "./IconsRow";

export function About() {
    return(
        <>
            <Head>
                <title>Timóteo | Personal Portfolio</title>
            </Head>

            <Flex
                maxWidth="1120px"
                m="0 auto"
                p="0 2rem"
                height="calc(120vh - 5rem)"
                display="flex"
                align-items="center"
                justifyContent="space-between"
            >
                <Box
                >

                    <IconsRow />

                    <Text 
                        as="h1"
                        fontSize="62"
                        fontWeight="700"
                    >
                        Oi, sou Timóteo Piano
                    </Text>
                    <Text 
                        as="p"
                        fontSize="26"
                        fontWeight="300"
                    >
                        Desenvolvedor Front-End Junior 👨‍💻👋
                    </Text>

                    <Button
                        colorScheme='red'
                        variant='outline'
                        borderRadius="25"
                        p="6"

                        _hover_={{bg: '#e53e3e'}}
                    >
                        Meu Portfolio
                    </Button>
                    <Button
                        colorScheme='red'
                        borderRadius="25"
                        p="6"
                        centerIcon={<FaPlay />}
                    >
                        <Icon 
                            as={FaPlay}
                            fontSize="20"
                            m="4"
                        />
                    </Button>
                </Box>

                <Image 
                    src="/images/profile.png"
                    w="450"
                    h="600"
                />
            </Flex>
        </>
    )
}