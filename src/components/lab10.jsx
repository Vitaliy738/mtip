import {Box, Link, Text, VStack} from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'
import {useEffect, useState} from "react";

const numberToWords = (text) => {
    text = String(text);
    return text.replace(/\b\d+\b/g, (num) => {
        const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        return num.split("").map(digit => words[digit] || digit).join(" ");
    });
};

const Lab10 = () => {
    const [toursOriginal, setToursOriginal] = useState([]);
    const [toursModified, setToursModified] = useState([]);

    useEffect(() => {
        // Завантажуємо XML-документ
        fetch('./tourOffers.xml')
            .then(response => response.text())
            .then(data => {
                // Парсимо XML-документ
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "application/xml");

                // Отримуємо всі елементи <tour>
                const tourNodes = xmlDoc.getElementsByTagName("tour");

                // Масив для оригінальних і модифікованих даних
                const originalTours = [];
                const modifiedTours = [];

                Array.from(tourNodes).forEach((node) => {
                    const id = node.getElementsByTagName("id")[0].textContent;
                    const country = node.getElementsByTagName("country")[0].textContent;
                    const type = node.getElementsByTagName("type")[0].textContent;
                    const description = node.getElementsByTagName("description")[0].textContent;
                    const hotTour = node.getElementsByTagName("hotTour")[0].textContent === "true";
                    const price = node.getElementsByTagName("price")[0].textContent;
                    const currency = node.getElementsByTagName("price")[0].getAttribute("currency");
                    const quantity = node.getElementsByTagName("quantity")[0].textContent;
                    const season = node.getElementsByTagName("season")[0].textContent;
                    const agency = node.getElementsByTagName("agency")[0].textContent;

                    // Зберігаємо оригінальні дані
                    originalTours.push({ id, country, type, description, hotTour, price, currency, quantity, season, agency });

                    // Зберігаємо модифіковані дані з заміною чисел
                    modifiedTours.push({
                        id: numberToWords(id),
                        country: numberToWords(country),
                        type: numberToWords(type),
                        description: numberToWords(description),
                        hotTour: numberToWords(hotTour),
                        price: numberToWords(price),
                        currency: numberToWords(currency),
                        quantity: numberToWords(quantity),
                        season: numberToWords(season),
                        agency: numberToWords(agency)
                    });
                });

                setToursOriginal(originalTours);
                setToursModified(modifiedTours);
            });
    }, []);

    return (
        <Box className="p-6 m-5">
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>1. Завантажте документ XML, розроблений у попередніх роботах, в об`єкт документа та відобразіть у вікні браузера.</Text>
                    <Text>2. Використовуючи методи DOM XML, сформуйте HTML-сторінку, що містить таблицю з кількох стовпців.</Text>
                    <Text>3. Використовуючи методи DOM XML, замініть цифрові значення їх словесними еквівалентами.</Text>
                    <VStack className="mt-6">
                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab10.jsx"
                        >
                            Коди програми
                        </Link>

                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/public/tourOffers.xml"
                        >
                            XML документ
                        </Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Country</Th>
                            <Th>Type</Th>
                            <Th >Description</Th>
                            <Th >Hot Tour</Th>
                            <Th >Price</Th>
                            <Th >Quantity</Th>
                            <Th >Season</Th>
                            <Th >Agency</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {toursOriginal.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.country}</Td>
                                <Td>{item.type}</Td>
                                <Td>{item.description}</Td>
                                <Td>{item.hotTour ? "Yes" : "No"}</Td>
                                <Td>{item.price}</Td>
                                <Td>{item.quantity}</Td>
                                <Td>{item.season}</Td>
                                <Td>{item.agency}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Country</Th>
                            <Th>Type</Th>
                            <Th >Description</Th>
                            <Th >Hot Tour</Th>
                            <Th >Price</Th>
                            <Th >Quantity</Th>
                            <Th >Season</Th>
                            <Th >Agency</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {toursModified.map((item) => {
                            return (
                                <Tr key={item.id}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.country}</Td>
                                    <Td>{item.type}</Td>
                                    <Td>{item.description}</Td>
                                    <Td>{item.hotTour ? "Yes" : "No"}</Td>
                                    <Td>{item.price}</Td>
                                    <Td>{item.quantity}</Td>
                                    <Td>{item.season}</Td>
                                    <Td>{item.agency}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default Lab10;