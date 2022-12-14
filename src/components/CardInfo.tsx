import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string
    content: string

}
const CardInfo = ({mainContent, content,}:ICardInfo) => {
    return (
        <Box 
        background='white' 
        minHeight='120px' 
        p={8}
        borderRadius='25px'
        >   
            <Text fontSize='2x1' fontWeight='bold'>
                {mainContent}
            </Text>
            <Text fontSize='x1'>
                {content}
            </Text>
                   
        </Box>
    )
}

export default CardInfo;