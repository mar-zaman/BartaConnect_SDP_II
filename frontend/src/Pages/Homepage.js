/*import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          BartaConnect
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;  */


import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {/* টাইটেল এবং সাব-টাইটেল বক্স */}
      <Box
        display="flex"
        flexDirection="column" // লেখাগুলোকে উপর-নিচ করার জন্য
        alignItems="center"
        justifyContent="center"
        p={3}
        bg="rgba(255, 255, 255, 0.73)" // স্বচ্ছ সাদা ব্যাকগ্রাউন্ড (Glassmorphism)
        w="100%"
        m="40px 0 15px 0"
        borderRadius="2xl"
        boxShadow="xl"
        backdropFilter="blur(10px)"
      >
        {/* মূল টাইটেল */}
        <Text fontSize="4xl" fontWeight="700" color="purple.700" letterSpacing="tight"   fontFamily="Work sans"
  fontWeight="bold"
  fontStyle="italic" >
          BartaConnect | বার্তাকানেক্ট</Text>
        
        {/* নতুন সাব-টাইটেল */}
       <Text fontSize="md" fontWeight="500" color="purple.500" mt="-5px">
          Welcome to BartaConnect 2.0 by- Md. Akhtaruzzaman (CSE-01)
        </Text>
      </Box>

      {/* লগইন এবং সাইনআপ ফর্ম বক্স */}
      <Box
        bg="rgba(255, 255, 255, 0.86)"
        w="100%"
        p={4}
        borderRadius="2xl"
        boxShadow="2xl"
        backdropFilter="blur(10px)"
      >
        <Tabs isFitted variant="soft-rounded" colorScheme="purple">
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

