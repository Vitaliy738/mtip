import { ChakraProvider, Box, Flex, VStack, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import AppRoutes from "../AppRoutes.jsx";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Flex className="min-h-screen">
                    {/* Бічна панель */}
                    <Box
                        as="nav"
                        className="w-64 bg-gray-800 text-white"
                        p={4}
                    >
                        <VStack align="start" spacing={4}>
                            <Text className="font-bold text-xl">Лабораторні роботи</Text>
                            <RouterLink to="/mtip/lab2" className="hover:text-gray-400">
                                Лабораторна робота 1
                            </RouterLink>
                            <RouterLink to="/mtip/lab2" className="hover:text-gray-400">
                                Лабораторна робота 2
                            </RouterLink>
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
                            <Text>Сорокін Віталій Сергійович</Text>
                        </Box>

                        {/* Контент */}
                        <Box className="flex-grow p-6">
                            <Routes>
                                {AppRoutes.map((route, index) => {
                                    const { element, ...rest } = route;
                                    return <Route key={index} {...rest} element={element} />;
                                })}
                            </Routes>
                        </Box>
                    </Flex>
                </Flex>
            </Router>
        </ChakraProvider>
    );
}

export default App;