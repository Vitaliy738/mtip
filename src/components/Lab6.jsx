import 'react';
import $ from 'jquery';
import {Link, VStack, Text, Box} from "@chakra-ui/react";

export const Lab6 = () => {
    const handleAnimate = () => {
        const $text = $('#animated-text');

        // Змінює регістр та рухається вправо і вниз через 1 сек
        $text.delay(1000).queue(function(next) {
            $(this).css({
                'text-transform': 'lowercase',
                'transform': 'translate(50px, 70px)'
            });
            next();
        });

        // Стає жирним через 2 сек
        $text.delay(1000).queue(function(next) {
            $(this).css('font-weight', 'bold');
            next();
        });

        // Рухається вліво і вниз через 3 сек
        $text.delay(1000).queue(function(next) {
            $(this).css('transform', 'translate(-20px, 80px)');
            next();
        });

        // Стає підкресленим через 4 сек
        $text.delay(1000).queue(function(next) {
            $(this).css('text-decoration', 'underline');
            next();
        });

        // Плавно зникає через 5 сек
        $text.delay(1000).fadeOut();

        // Повернення до початкового стану через 7 сек (через 2 секунди після зникнення)
        $text.delay(2000).queue(function(next) {
            $(this).css({
                'text-transform': '',
                'transform': 'translate(0, 0)',
                'font-weight': '',
                'text-decoration': '',
                'opacity': 1
            }).fadeIn();
            next();
        });
    };

    return (
        <Box className="p-6 m-5">
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>Слово ІСПР</Text>
                    <Text>1. Змінює регістр (з верхнього на нижній)</Text>
                    <Text>2. Рухається на 50 пікселів вправо та на 70 вниз</Text>
                    <Text>3. Стає жирним</Text>
                    <Text>4. Рухається на 20 пікселів вліво та на 80 вниз</Text>
                    <Text>5. Стає підкресленим</Text>
                    <Text>6. Плавно зникає</Text>
                    <VStack className="mt-6">
                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab6.jsx"
                        >
                            Коди програми
                        </Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <span
                    id="animated-text"
                    style={{ fontSize: '40px', display: 'block' }}
                >
                    ІСПР
                </span>
                <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={handleAnimate}
                >
                    Запустити анімацію
                </button>
            </Box>
        </Box>
    );
}
