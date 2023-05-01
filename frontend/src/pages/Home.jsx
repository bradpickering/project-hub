import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
  return (
    <SimpleGrid columns={{ md: 2, sm: 1, xl: 3 }} spacing={10}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </SimpleGrid>
  );
}
