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
} from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import { FaThumbsUp } from "react-icons/fa";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
export default function ProjectCard() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  const vote = () => {

  }

  return (
    <Card
      maxW="xl"
      _hover={{
        cursor: "pointer",
        borderColor: "teal",
        boxShadow: "0 0 0 1px",
      }}
    >
      <CardHeader>
        <Box>
          <Flex justify="space-between">
            <Heading size="lg">Project Title</Heading>
            <Flex>
              <Flex direction="column" gap="1">
                <IconButton variant='ghost' icon={<TriangleUpIcon boxSize={5} />} />
                <IconButton variant='ghost' icon={<TriangleDownIcon boxSize={5} />} />
              </Flex>
              <Text marginTop={6} marginLeft={2} fontSize='lg' as='bold'>
                10
              </Text>
            </Flex>
          </Flex>
          <Text as="i" fontSize="sm" position='absolute' top={14}>
            Created by user123
          </Text>
          <Text fontSize="lg">
            This app is a blah blah blah that does blah blah blah
          </Text>

          <Image
            maxH="xl"
            objectFit="cover"
            src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          />
        </Box>
      </CardHeader>
      <CardFooter>
        <Flex direction="column">
            <Button>Save</Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}
