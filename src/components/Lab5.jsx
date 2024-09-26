import $ from "jquery";
import {Box, Link, Text, VStack} from "@chakra-ui/react";
import {useEffect} from "react";

export const Lab5 = () => {
    useEffect(() => {
        $('#text').text('Це перший текст.');
    }, []);

    const handleSwitchText = () => {
        const currentText = $('#text').text();
        if (currentText === 'Це перший текст.') {
            $('#text').text('Це другий текст.');
        } else {
            $('#text').text('Це перший текст.');
        }

        // Анімація тексту
        $('#text').css({ color: 'blue', fontSize: '16px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' })
            .animate({ fontSize: '40px' }, 1000) // Збільшення
            .animate({ top: '70%', fontSize: '20px' }, 1000); // Переміщення вниз і зменшення
    };

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
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab5.jsx"
                        >
                            Коди програми
                        </Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <h2 className="text-xl font-bold">Текстовий перемикач</h2>
                <p id="text"></p>
                <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={handleSwitchText}
                >
                    Переключити текст
                </button>
            </Box>
        </Box>
    );
}