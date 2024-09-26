import {useEffect, useState} from "react";
import {Box, Link, Text, VStack} from "@chakra-ui/react";

export const Lab7 = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchXMLData = async () => {
            try {
                const response = await fetch('./tourOffers.xml'); // Шлях до XML-файлу
                const xmlText = await response.text();

                // Парсинг XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                const offerElements = xmlDoc.getElementsByTagName('offer');
                const offersArray = Array.from(offerElements).map(offer => ({
                    country: offer.getElementsByTagName('country')[0].textContent,
                    tourType: offer.getElementsByTagName('tourType')[0].textContent,
                    description: offer.getElementsByTagName('description')[0].textContent,
                    hotTour: offer.getElementsByTagName('hotTour')[0].textContent === 'true',
                    price: offer.getElementsByTagName('price')[0].textContent,
                    quantity: offer.getElementsByTagName('quantity')[0].textContent,
                }));

                setOffers(offersArray);
            } catch (error) {
                console.error("Error fetching XML data: ", error);
            }
        };

        fetchXMLData();
    }, []);

    return (
        <Box className="p-6 m-5">
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>1. Побудувати статистичну та динамічну модель для заданого варіанту.</Text>
                    <Text>2. Створіть XML-документ, використовуючи інформаційну модель, побудовану в першій частині лабораторної роботи.</Text>
                    <Text fontSize="xl" fontWeight="bold">Тема: Інформація про пропозиції туристичної агенції:</Text>
                    <Text>- Країна;</Text>
                    <Text>- Тип туру (екскурсія, індивідуальний тур, тур вихідного дня);</Text>
                    <Text>- Опис туру;</Text>
                    <Text>- гарячий тур ( непарний елемент );</Text>
                    <Text>- Вартість;</Text>
                    <Text>- Кількість.</Text>
                    <VStack className="mt-6">
                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab7.jsx"
                        >
                            Коди програми
                        </Link>
                    </VStack>
                </VStack>
            </Box>
            <div className="p-6 bg-white rounded-md shadow-md m-5">
                <h2 className="text-xl font-bold">Пропозиції туристичної агенції</h2>
                <ul className="mt-4">
                    {offers.map((offer, index) => (
                        <li key={index} className="mb-4">
                            <div>
                                <strong>Країна:</strong> {offer.country}
                            </div>
                            <div>
                                <strong>Тип туру:</strong> {offer.tourType}
                            </div>
                            <div>
                                <strong>Опис туру:</strong> {offer.description}
                            </div>
                            <div>
                                <strong>Гарячий тур:</strong> {offer.hotTour ? 'Так' : 'Ні'}
                            </div>
                            <div>
                                <strong>Вартість:</strong> {offer.price} грн
                            </div>
                            <div>
                                <strong>Кількість:</strong> {offer.quantity}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Box>
    );
};