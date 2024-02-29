import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "@/Components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      {/* as="form" faz parte do conceito de interface declarative é feita uma mutação da tag do html */}
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
