import { Flex, Text, HStack, Icon, Button } from '@chakra-ui/react'
import { RiHome2Fill, RiUser2Fill, RiCodeBoxFill, RiBookmark3Fill, RiFocus2Line, RiMailFill, RiArrowDownSFill, RiBook2Fill} from 'react-icons/ri'
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
                pl='8'
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
                    <Button leftIcon={<RiHome2Fill />} bg='transparent' colorScheme='red'>
                        Início
                    </Button>
                    <Button leftIcon={<RiFocus2Line />} bg='transparent' colorScheme='red'>
                        Serviços
                    </Button>
                    <Button leftIcon={<RiUser2Fill />} bg='transparent' colorScheme='red'>
                        Sobre
                    </Button>
                    <Button leftIcon={<RiBookmark3Fill />} bg='transparent' colorScheme='red'>
                        Habilidades
                    </Button>
                    <Button leftIcon={<RiCodeBoxFill />} bg='transparent' colorScheme='red'>
                        Portfolio
                    </Button>
                    <Button leftIcon={<RiBook2Fill />} bg='transparent' colorScheme='red'>
                        Blog
                    </Button>

                    <Button 
                        bg='red.500' 
                        borderRadius='25'
                        colorScheme='red'
                        isLoading={false}
                        leftIcon={<RiMailFill />}
                    >
                        Contatar
                    </Button>
                    <Button
                        bg='transparent'
                        pl='4'
                        color='white'
                        rightIcon={<RiArrowDownSFill />}
                    >
                        <Icon as={GiBrazilFlag} mr='3'/>
                    </Button>
                </HStack>
            </Flex>
        </Flex>
    )
}