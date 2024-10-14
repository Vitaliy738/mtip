import {useEffect, useState} from "react";
import {Box, Code, Image, Link, Table, Tbody, Td, Text, Th, Thead, Tr, VStack} from "@chakra-ui/react";

export const Lab7 = () => {
    const [offers, setOffers] = useState([]);
    const [xmlCode, setXmlCode] = useState("");

    useEffect(() => {
        setXmlCode(`
            <?xml version="1.0" encoding="UTF-8"?>
            <tourOffers>
                <tour>
                    <country>France</country>
                    <type>Excursion</type>
                    <description>5-day tour of Paris, including visits to the Eiffel Tower and the Louvre.</description>
                    <hotTour>true</hotTour>
                    <price>500</price>
                    <quantity>20</quantity>
                </tour>
                <tour>
                    <country>Italy</country>
                    <type>Individual Tour</type>
                    <description>Romantic weekend in Venice.</description>
                    <hotTour>false</hotTour>
                    <price>700</price>
                    <quantity>15</quantity>
                </tour>
                <tour>
                    <country>Greece</country>
                    <type>Weekend Tour</type>
                    <description>3-day beach getaway in Santorini.</description>
                    <hotTour>true</hotTour>
                    <price>400</price>
                    <quantity>25</quantity>
                </tour>
                <tour>
                    <country>Spain</country>
                    <type>Excursion</type>
                    <description>7-day tour of Barcelona and Madrid.</description>
                    <hotTour>false</hotTour>
                    <price>800</price>
                    <quantity>30</quantity>
                </tour>
                <tour>
                    <country>Germany</country>
                    <type>Excursion</type>
                    <description>6-day tour of Berlin, including visits to historical landmarks.</description>
                    <hotTour>true</hotTour>
                    <price>650</price>
                    <quantity>18</quantity>
                </tour>
                <tour>
                    <country>Thailand</country>
                    <type>Individual Tour</type>
                    <description>10-day exotic vacation in Phuket.</description>
                    <hotTour>true</hotTour>
                    <price>1200</price>
                    <quantity>12</quantity>
                </tour>
                <tour>
                    <country>Japan</country>
                    <type>Excursion</type>
                    <description>8-day cultural tour of Tokyo and Kyoto.</description>
                    <hotTour>false</hotTour>
                    <price>1500</price>
                    <quantity>22</quantity>
                </tour>
                <tour>
                    <country>Australia</country>
                    <type>Weekend Tour</type>
                    <description>3-day tour of Sydney and the Great Barrier Reef.</description>
                    <hotTour>true</hotTour>
                    <price>1800</price>
                    <quantity>10</quantity>
                </tour>
                <tour>
                    <country>Canada</country>
                    <type>Excursion</type>
                    <description>5-day adventure tour in the Canadian Rockies.</description>
                    <hotTour>false</hotTour>
                    <price>1100</price>
                    <quantity>16</quantity>
                </tour>
                <tour>
                    <country>Mexico</country>
                    <type>Weekend Tour</type>
                    <description>4-day all-inclusive beach holiday in Cancun.</description>
                    <hotTour>true</hotTour>
                    <price>900</price>
                    <quantity>20</quantity>
                </tour>
            </tourOffers>
            `
        );
        
        const fetchXMLData = async () => {
            try {
                const response = await fetch('./tourOffers.xml'); // Шлях до XML-файлу
                const xmlText = await response.text();

                // Парсинг XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                const offerElements = xmlDoc.getElementsByTagName('tour');
                const offersArray = Array.from(offerElements).map(offer => ({
                    country: offer.getElementsByTagName('country')[0].textContent,
                    type: offer.getElementsByTagName('type')[0].textContent,
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
                    <Text>2. Створіть XML-документ, використовуючи інформаційну модель, побудовану в першій частині
                        лабораторної роботи.</Text>
                    <Text fontSize="xl" fontWeight="bold">Тема: Інформація про пропозиції туристичної агенції</Text>
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
                <Text fontSize="xl" fontWeight="bold">Статична модель:</Text>
                <Box overflowX="auto">
                    <Image
                        src='./static_information_model_lab7.excalidraw.svg'
                        alt="Статична модель XML документу"
                        className="rounded-md shadow-md"
                    />
                </Box>
            </div>

            <div className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">XML документ:</Text>
                <Box overflowX="auto">
                    <pre style={{whiteSpace: 'pre-wrap'}}>
                        <Code>
                            {xmlCode}
                        </Code>
                    </pre>
                </Box>
            </div>

            <div className="p-6 bg-white rounded-md shadow-md m-5">
                <Box overflowX="auto">
                    <Table variant="simple">
                        <Thead>
                        <Tr>
                                <Th>#</Th>
                                <Th>Country</Th>
                                <Th>Type</Th>
                                <Th>Description</Th>
                                <Th>Hot tour</Th>
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {offers.map((offer, index) => (
                                <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td>{offer.country}</Td>
                                    <Td>{offer.type}</Td>
                                    <Td>{offer.description}</Td>
                                    <Td>{offer.hotTour}</Td>
                                    <Td>{offer.price}</Td>
                                    <Td>{offer.quantity}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </div>
        </Box>
    );
};