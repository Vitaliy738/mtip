import { ChakraProvider, Box, Flex, VStack, Text, Link } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Flex className="min-h-screen">
                {/* Бічна панель */}
                <Box
                    as="nav"
                    className="w-64 bg-gray-800 text-white"
                    p={4}
                >
                    <VStack align="start" spacing={4}>
                        <Text className="font-bold text-xl">Лабораторні роботи</Text>
                        <Link href="#" className="hover:text-gray-400">
                            Лабораторна робота 1
                        </Link>
                    </VStack>
                </Box>

                {/* Основний контент */}
                <Flex className="flex-grow bg-gray-100" direction="column">
                    {/* Футер */}
                    <Box
                        as="footer"
                        className="bg-gray-200 w-full text-center py-4 shadow"
                    >
                        <Text className="font-bold">Звіт</Text>
                        <Text>про лабораторні роботи з курсу</Text>
                        <Text>«Сучасні технології Інтернет-програмування»</Text>
                        <Text>студента групи ІПЗ-22-1</Text>
                        <Text>Сорокіна Віталія Сергійовича</Text>
                    </Box>

                    {/* Контент */}
                    <Box className="flex-grow p-6">
                        <Text className="text-2xl">Виберіть лабораторну роботу з меню.</Text>
                    </Box>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}

export default App;