import { Button, Icon, Link, IconButton } from "@chakra-ui/react";

import { FaLinkedinIn, FaWhatsapp, FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa"

export function IconsRow() {
    return(
        <>
            <Link href='https://github.com/trpiano/' isExternal>
                <IconButton
                    colorScheme="red"
                    variant='outline'
                    mr="6"
                    p="2"
                    borderRadius="25"

                    icon={<FaGithub/>}
                    aria-label='GitHub'
                />
            </Link>
            <Link href='https://www.linkedin.com/in/timoteopiano/' isExternal>
                <IconButton
                    colorScheme="red"
                    variant='outline'
                    mr="6"
                    p="2"
                    borderRadius="25"

                    icon={<FaLinkedinIn/>}
                    aria-label='LinkedIn'
                />
            </Link> 
            <Link href='https://instagram.com/timoteopiano.dev' isExternal>
                <IconButton
                    colorScheme="red"
                    variant='outline'
                    mr="6"
                    p="2"
                    borderRadius="25"

                    icon={<FaInstagram/>}
                    aria-label='Instagram'

                />
            </Link>
            <Link href='https://wa.me/message/Z4NS6IN6UUL5M1' isExternal>
                <IconButton
                    colorScheme="red"
                    variant='outline'
                    mr="6"
                    p="2"
                    borderRadius="25"

                    icon={<FaWhatsapp/>}
                    aria-label='WhatsApp'
                />
            </Link>
            <Link href='https://t.me/trpiano' isExternal>
                <IconButton
                    colorScheme="red"
                    variant='outline'
                    p="2"
                    borderRadius="25"

                    icon={<FaTelegramPlane/>}
                    aria-label='Telegram'
                />
            </Link>
        </>
    )
}