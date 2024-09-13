import {Box, HStack, VStack, Text, Image, Link} from "@chakra-ui/react";
import {useState} from "react";

export const Lab2 = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    return (
        <>
            <VStack spacing={4} align="stretch" className="p-6">
                <Text fontSize="xl" fontWeight="bold">Завдання 1:</Text>
                <Text>
                    Вертикальне дворівневе меню, що розкривається при натисканні лівою
                    кнопкою миші. Другий рівень меню приховується, коли вказівник миші залишає область
                    вибраного пункту або меню.
                </Text>
            </VStack>

            <HStack
                align="start"
                spacing={8}
                className="w-128 text-black p-4 bg-gray-100 rounded-md"
                onMouseLeave={handleMouseLeave}
            >
                {/* Перший пункт меню */}
                <Box onMouseLeave={handleMouseLeave}>
                    <Text
                        fontSize="lg"
                        className="cursor-pointer hover:text-blue-500"
                        onClick={() => handleMenuClick('menu1')}
                    >
                        Пункт меню 1
                    </Text>
                    {openMenu === 'menu1' && (
                        <VStack spacing={2} className="p-2 pl-4">
                            <Text className="hover:text-blue-400 cursor-pointer">
                                Підпункт 1.1
                            </Text>
                            <Text className="hover:text-blue-400 cursor-pointer">
                                Підпункт 1.2
                            </Text>
                        </VStack>
                    )}
                </Box>

                <Box onMouseLeave={handleMouseLeave}>
                    <Text
                        fontSize="lg"
                        className="cursor-pointer hover:text-blue-500"
                        onClick={() => handleMenuClick('menu2')}
                    >
                        Пункт меню 2
                    </Text>
                    {openMenu === 'menu2' && (
                        <VStack spacing={2} className="p-2 pl-4">
                            <Text className="hover:text-blue-400 cursor-pointer">
                                Підпункт 2.1
                            </Text>
                            <Text className="hover:text-blue-400 cursor-pointer">
                                Підпункт 2.2
                            </Text>
                        </VStack>
                    )}
                </Box>
            </HStack>

            <VStack align="start" spacing={4} className="text-black p-6 bg-gray-100 mt-6 rounded-md">
                <Text fontSize="xl" fontWeight="bold">Завадння 2:</Text>
                <Text>
                    Додайте зображення на сторінку; при наведенні вказівника миші воно має поступово збільшуватися у розмірах, 
                    створюючи ілюзію наближення зображення (граничні значення висоти та ширини встановіть самостійно).
                </Text>

                <Image
                    src="/images/page1.png"
                    alt="Зображення"
                    className="transition-transform transform hover:scale-110 duration-500 rounded-md shadow-md"
                    boxSize="240px"
                />
            </VStack>
            
            <HStack>
                <Link fontWeight='bold' fontSize='24' href='https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab2.jsx'>Коди програми</Link>
            </HStack>
        </>
    );
}