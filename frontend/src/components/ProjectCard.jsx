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
  Textarea,
  List,
  ListItem,
  ListIcon,
  Link
} from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import {
  FaThumbsUp,
  FaBookmark,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import ResizeTextarea from "react-textarea-autosize";
import Comment from "./Comment";
export default function ProjectCard() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  const tags = [
    "ChakraUI",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "ExpressJS",
  ];
  const colours = ["teal", "green", "red", "yellow", "pink"];

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        onClick={onOpen}
      >
        <CardHeader>
          <Box>
            <Flex direction="column" gap={2}>
              <Flex justify="space-between">
                <Heading size="lg">Project Title</Heading>
                <Flex>
                  <Flex direction="column" gap="1">
                    <IconButton
                      onClick={(e) => e.preventDefault}
                      variant="ghost"
                      icon={<TriangleUpIcon boxSize={5} />}
                    />
                    <IconButton
                      onClick={(e) => e.preventDefault}
                      variant="ghost"
                      icon={<TriangleDownIcon boxSize={5} />}
                    />
                  </Flex>
                  <Text marginTop={6} marginLeft={2} fontSize="lg" as="bold">
                    10
                  </Text>
                </Flex>
              </Flex>
              <Text as="i" fontSize="sm" position="absolute" top={14}>
                Created by user123
              </Text>
              <Text as="i" fontSize="xs" position="absolute" top={75}>
                6h ago
              </Text>
              <Text fontSize="lg">
                This app is a blah blah blah that does blah blah blah
              </Text>

              <Image
                maxH="xl"
                objectFit="cover"
                src="https://i.imgur.com/pTds4WC.png"
              />

              <Wrap>
                {tags.map((tag, idx) => {
                  return (
                    <WrapItem>
                      <Tag colorScheme={colours[idx % 5]}>{tag}</Tag>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Flex>
          </Box>
        </CardHeader>
        <CardFooter justifyContent="space-between">
          <Button onClick={onOpen}>View More</Button>
          <IconButton
            variant="ghost"
            boxSize={12}
            icon={<Icon as={FaBookmark} />}
          />
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={{ md: "70vw", sm: "90vw" }}>
          <ModalHeader display="flex" justifyContent="center" fontSize={30}>
            Project Title
          </ModalHeader>
          <Divider borderColor="black" />
          <ModalCloseButton size={70} boxSize={50} />
          <ModalBody>
            <Flex direction="column" gap={3}>
              <Flex direction="column">
                <Text> Created by user123 </Text>
                <Text as="i"> 6h ago </Text>
              </Flex>

              <Flex justify="center">
                <Image
                  objectFit="cover"
                  src="https://i.imgur.com/pTds4WC.png"
                />
              </Flex>

              <Divider />
              <Flex direction="column" gap={3}>
                <Heading size="md">Description</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Flex>

              <Divider marginTop={4} />

              <Flex direction="column" gap={3}>
                <Heading size="md">Tools and Technologies</Heading>

                <Wrap spacing={8} marginLeft={4}>
                  {tags.map((tag) => {
                    return (
                      <WrapItem>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            color="green.500"
                            marginTop={1}
                            marginRight={1}
                          />
                          <Link>{tag}</Link>
                        </Flex>
                      </WrapItem>
                    );
                  })}
                  {/* <List spacing={3}>
                    {tags.map(tag => {
                      return (
                      <ListItem display='flex'>
                        <ListIcon as={FaCheckCircle} color='green.500'/>
                        {tag}
                      </ListItem>
                      )
                    })}
                  </List> */}
                </Wrap>
              </Flex>
            

              <Divider/>
              <Heading size="md">Comments</Heading>
              <Flex direction='column' gap={4} maxH={500} overflow='scroll'>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>              <Comment/>
                <Comment/>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <InputGroup>
              <Textarea
                ref={ref}
                transition="height none"
                height="auto"
                maxRows={10}
                as={ResizeTextarea}
                variant="filled"
                resize="none"
                placeholder="Leave a Comment"
                size="lg"
              />
              <InputRightElement
                size={100}
                children={<Icon as={FaPaperPlane} cursor="pointer" />}
              />
            </InputGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
