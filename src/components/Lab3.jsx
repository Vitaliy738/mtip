import {Button, HStack, Input, Link, VStack} from "@chakra-ui/react";
import {useState} from "react";

export const Lab3 = () => {
    const [input, setInput] = useState('');

    // Обчислює результат "на льоту" без зміни виразу
    const handleClick = (value) => {
        const newInput = input + value;
        setInput(newInput);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleEqual = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput('Error');
        }
    };

    return (
        <VStack className="bg-gray-100 p-8 rounded shadow-md" spacing={4}>
            <VStack spacing={2}>
                <HStack>
                    <Input
                        value={input}
                        placeholder="0"
                        size="lg"
                        className="mb-4"
                        isReadOnly
                    />
                    <Button colorScheme="red" onClick={handleClear}>C</Button>
                </HStack>
                
                <HStack>
                    <Button onClick={() => handleClick('1')}>1</Button>
                    <Button onClick={() => handleClick('2')}>2</Button>
                    <Button onClick={() => handleClick('3')}>3</Button>
                    <Button onClick={() => handleClick('+')}>+</Button>
                </HStack>
                <HStack>
                    <Button onClick={() => handleClick('4')}>4</Button>
                    <Button onClick={() => handleClick('5')}>5</Button>
                    <Button onClick={() => handleClick('6')}>6</Button>
                    <Button onClick={() => handleClick('-')}>-</Button>
                </HStack>
                <HStack>
                    <Button onClick={() => handleClick('7')}>7</Button>
                    <Button onClick={() => handleClick('8')}>8</Button>
                    <Button onClick={() => handleClick('9')}>9</Button>
                    <Button onClick={() => handleClick('*')}>*</Button>
                </HStack>
                <HStack>
                    <Button onClick={() => handleClick('0')}>0</Button>
                    <Button onClick={() => handleClick('.')}>.</Button>
                    <Button onClick={() => handleClick('/')}>/</Button>
                    <Button onClick={handleEqual}>=</Button>
                </HStack>
            </VStack>
            
            <VStack className="mt-6">
                <Link fontWeight='bold' fontSize='24' href='https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab3.jsx'>Коди програми</Link>
            </VStack>
        </VStack>
    );
}