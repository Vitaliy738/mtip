import {Box, Link, Text, VStack} from "@chakra-ui/react";
import { useState } from "react";

export const Lab6 = () => {
    const [step, setStep] = useState(0);

    const handleAnimate = () => {
        const timeouts = [];

        // Змінює регістр та рухається вправо і вниз через 1 сек
        timeouts.push(setTimeout(() => setStep(1), 1000));

        // Стає жирним через 2 сек
        timeouts.push(setTimeout(() => setStep(2), 2000));

        // Рухається вліво і вниз через 3 сек
        timeouts.push(setTimeout(() => setStep(3), 3000));

        // Стає підкресленим через 4 сек
        timeouts.push(setTimeout(() => setStep(4), 4000));

        // Плавно зникає через 5 сек
        timeouts.push(setTimeout(() => setStep(5), 5000));

        // Повернення до початкового стану через 7 сек (через 2 секунди після зникнення)
        timeouts.push(setTimeout(() => setStep(0), 7000));

        // Очищення таймерів при завершенні
        return () => timeouts.forEach(clearTimeout);
    };

    return (
        <>
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
                <VStack spacing={4} align="stretch" className="p-6">
                    <div className="relative h-64 flex flex-col items-center justify-center">
                        <span
                            className={`
                              transition-all duration-1000 ease-in-out
                              ${step >= 1 ? "lowercase transform translate-x-12 translate-y-16" : ""}
                              ${step >= 2 ? "font-bold" : ""}
                              ${step >= 3 ? "transform translate-x-4 translate-y-32" : ""}
                              ${step >= 4 ? "underline" : ""}
                              ${step >= 5 ? "opacity-0" : "opacity-100"}
                          `}
                            style={{fontSize: "40px"}}
                        >
                          ІСПР
                        </span>
                        <button
                            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            onClick={handleAnimate}
                        >
                            Запустити анімацію
                        </button>
                    </div>
                </VStack>
            </Box>
        </>
    );
}