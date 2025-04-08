import {Box, Link, Text, VStack} from "@chakra-ui/react";

export const Lab22 = () => {
    return (
        <Box className="p-6 m-5">
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>1. За натисканням кнопки один фрагмент тексту замінювати іншим</Text>
                    <Text>2. Текст синього кольору рухається в центр сторінки, збільшується,
                        потім переміщається вниз і зменшується</Text>
                    <VStack className="mt-6">
                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab2.1.jsx"
                        >
                            Коди програми
                        </Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <h2 className="text-xl font-bold">Текстовий перемикач</h2>
            </Box>
        </Box>
    );
}