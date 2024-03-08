import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaKey } from "react-icons/fa";

const Index = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const toast = useToast();

  // Mock functions for sign up and sign in
  const handleSignUp = (e) => {
    e.preventDefault();
    // Generate a mock API key
    setApiKey(`mock-api-key-${Date.now()}`);
    setIsSignedIn(true);
    toast({
      title: "Account created.",
      description: "You have been signed up successfully!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Mock sign in with an existing API key
    setApiKey(`existing-api-key-${Date.now()}`);
    setIsSignedIn(true);
    toast({
      title: "Signed in.",
      description: "You have been signed in successfully!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container>
      <VStack spacing={8} py={10}>
        <Heading>Welcome to the API Service</Heading>

        {!isSignedIn ? (
          <>
            <form onSubmit={handleSignUp}>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type="email" required />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" required />
              </FormControl>
              <Button mt={6} colorScheme="blue" type="submit">
                Sign Up
              </Button>
            </form>

            <Text pt={6} fontSize="lg">
              - OR -
            </Text>

            <form onSubmit={handleSignIn}>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type="email" required />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" required />
              </FormControl>
              <Button mt={6} colorScheme="green" type="submit">
                Sign In
              </Button>
            </form>
          </>
        ) : (
          <Box textAlign="center">
            <Heading size="md">Your API Key</Heading>
            <Text fontSize="lg" wordBreak="break-all">
              {apiKey}
            </Text>
            <Button leftIcon={<FaKey />} mt={4} colorScheme="purple">
              Copy Key
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
