import { Flex, Textarea, Text, Image, Container, Box, Link } from "@chakra-ui/react";
import {TimeIcon} from "@chakra-ui/icons"
export default function Comment() {
  return (
      <Flex direction='column'>
        <Box backgroundColor='#ecf2f6' borderRadius={20} padding={4} maxWidth='90%' marginLeft={5}>
            <Flex align='center' gap={2}>
                <Link fontSize='sm' as='b' cursor='pointer'>user123</Link> 
                <TimeIcon w={3} h={3}/>
                <Text fontSize='sm'>6h ago</Text> 
            </Flex>
            <Text fontSize='xs' outline>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </Text>
        </Box>
      </Flex>
  );
}
