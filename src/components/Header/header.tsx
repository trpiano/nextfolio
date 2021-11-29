import { Flex, Text, HStack, Icon, Button } from '@chakra-ui/react'
import { RiHome2Fill, RiUser2Fill, RiCodeBoxFill, RiBookmark3Fill, RiFocus2Line, RiMailFill, RiArrowDownSFill} from 'react-icons/ri'
import { GiBrazilFlag } from 'react-icons/gi'

export function Header() {
    return(
        <Flex
            as="header" 
            w="100%" 
            maxWidth={1480} 
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='tight'
            >
                Timóteo
                <Text as='span' ml='1' color="pink.500">.</Text>
                dev
            </Text>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack  
                    spacing="2"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderColor="gray.700"
                >
                    <Button bg='transparent' colorScheme='red'>
                        <Icon 
                            as={RiHome2Fill} 
                            fontSize="20"
                            mr='2'
                        />
                        Home
                    </Button>
                    <Button bg='transparent' colorScheme='red'>
                        <Icon 
                            as={RiUser2Fill} 
                            fontSize="20"
                            mr='2'
                        />
                        About
                    </Button>
                    <Button bg='transparent' colorScheme='red'>
                        <Icon 
                            as={RiFocus2Line} 
                            fontSize="20"
                            mr='2'
                        />
                        Skills
                    </Button>
                    <Button bg='transparent' colorScheme='red'>
                        <Icon 
                            as={RiBookmark3Fill} 
                            fontSize="20"
                            mr='2'
                        />
                        Experience
                    </Button>
                    <Button bg='transparent' colorScheme='red'>
                        <Icon 
                            as={RiCodeBoxFill} 
                            fontSize="20"
                            mr='2'
                        />
                        Projects
                    </Button>

                    <Button 
                        bg='red.500' 
                        borderRadius='25'
                        colorScheme='red'
                        isLoading={false}
                    >
                        <Icon 
                            as={RiMailFill} 
                            fontSize="20"
                            mr='2'
                        />
                        Contact Us
                    </Button>
                    <Button
                        bg='transparent'
                        pl='4'
                        color='white'
                    >
                        <Icon as={GiBrazilFlag} mr='3'/>
                        <Icon as={RiArrowDownSFill} />
                    </Button>
                </HStack>
            </Flex>
        </Flex>
    )
}