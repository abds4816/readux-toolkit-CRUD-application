import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <Box w='full' minH='100vh'>
      <Container maxW='container.lg'>
        <Navbar />
        <Router />
      </Container>
    </Box>
  );
}

export default App;
