import {
  Card,
  CardHeader,
  CardFooter,
  Flex,
  Box,
  Text,
  Heading,
  Image,
  Button,
  IconButton,
  Wrap,
  Tag,
  Icon,
  WrapItem,
  useDisclosure,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Textarea
} from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import { FaThumbsUp, FaBookmark, FaPaperPlane } from "react-icons/fa";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import ResizeTextarea from "react-textarea-autosize";

export default function ProjectCard() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  const tags = ['ChakraUI', 'ReactJS', 'JavaScript', 'TypeScript', 'MongoDB', 'ExpressJS']
  const colours = ['teal', 'green',  'red', 'yellow', 'pink']

  const { isOpen, onOpen, onClose } = useDisclosure()

  const ref = useRef();

  return (
    <Box>

      <Card
        maxW="xl"
        _hover={{
          cursor: "pointer",
          borderColor: "teal",
          boxShadow: "0 0 0 1px",
        }}
      onClick={onOpen}>
        <CardHeader>
          <Box>
            <Flex justify="space-between">
              <Heading size="lg">Project Title</Heading>
              <Flex>
                <Flex direction="column" gap="1">
                  <IconButton onClick={(e) => e.preventDefault} variant='ghost' icon={<TriangleUpIcon boxSize={5} />} />
                  <IconButton onClick={(e) => e.preventDefault} variant='ghost' icon={<TriangleDownIcon boxSize={5} />} />
                </Flex>
                <Text marginTop={6} marginLeft={2} fontSize='lg' as='bold'>
                  10
                </Text>
              </Flex>
            </Flex>
            <Text as="i" fontSize="sm" position='absolute' top={14}>
              Created by user123
            </Text>
            <Text as="i" fontSize="xs" position='absolute' top={75}>
              6h ago
            </Text>
            <Text fontSize="lg">
              This app is a blah blah blah that does blah blah blah
            </Text>

            <Image
              maxH="xl"
              objectFit="cover"
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            />

            <Wrap>

              {tags.map((tag, idx) => {
                return (
                <WrapItem>
                  <Tag colorScheme={colours[(idx%5)]}>
                    {tag}
                  </Tag>
                </WrapItem>
                )
              })}
            </Wrap>
          </Box>
        </CardHeader>
        <CardFooter justifyContent='space-between'>
          <Button onClick={onOpen}>
            View More
          </Button>
            <IconButton variant='ghost' boxSize={12}
            icon={<Icon as={FaBookmark}/>}
            />
        </CardFooter>
      </Card>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="60vw">
            <ModalHeader display='flex' justifyContent='center' fontSize={30}>Project Title</ModalHeader>
            <Divider borderColor='black'/>
            <ModalCloseButton size={70} boxSize={50}/>
            <ModalBody>
              asdas
            </ModalBody>

            <ModalFooter>
              <InputGroup>
                <Textarea ref={ref} transition="height none" height='auto' maxRows={10} as={ResizeTextarea} variant='filled' resize='none' placeholder='Leave a Comment' size='lg' />
                <InputRightElement size={100} children={<Icon as={FaPaperPlane} cursor='pointer'/>} />
              </InputGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  );
}
