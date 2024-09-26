import {
    Box, Code,
    Link,
    Tab,
    Table,
    TabList,
    TabPanel,
    TabPanels, Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Lab9 = () => {
    const [offersXml, setOffersXml] = useState([]);
    const [offersXsl, setOffersXsl] = useState([]);
    const [xmlDataCode, setXmlDataCode] = useState("");
    const [xmlCode, setXmlCode] = useState("");
    const [xslCode, setXslCode] = useState("");

    useEffect(() => {
        // Завантажити XML та XSLT файли
        const loadXmlAndXsl = async () => {
            try {
                const xmlDataResponse = await fetch('src/tourOffers.xml');
                const xmlResponse = await fetch('src/tourOffers_9.xml');
                const xslResponse = await fetch('src/tourOffers_9.xsl');

                const xmlData = await xmlDataResponse.text();
                const xmlText = await xmlResponse.text();
                const xslText = await xslResponse.text();

                const transformedXmlOffers = transformXml(xmlData, xmlText);
                const transformedXslOffers = transformXml(xmlData, xslText);

                setOffersXml(transformedXmlOffers);
                setOffersXsl(transformedXslOffers);
            } catch (error) {
                console.error("Error loading XML/XSL: ", error);
            }
        };
        
        setXmlDataCode(`
        <?xml version="1.0" encoding="UTF-8"?>
        <tourOffers>
            <offer>
                <country>France</country>
                <tourType>Excursion</tourType>
                <description>Visit the Eiffel Tower and Louvre Museum.</description>
                <hotTour>true</hotTour>
                <price>1500</price>
                <quantity>20</quantity>
            </offer>
            <offer>
                <country>Italy</country>
                <tourType>Individual Tour</tourType>
                <description>Explore the ancient city of Rome.</description>
                <hotTour>false</hotTour>
                <price>1200</price>
                <quantity>15</quantity>
            </offer>
            <offer>
                <country>Spain</country>
                <tourType>Weekend Tour</tourType>
                <description>Relax on the beaches of Barcelona.</description>
                <hotTour>true</hotTour>
                <price>900</price>
                <quantity>10</quantity>
            </offer>
            <offer>
                <country>Germany</country>
                <tourType>Excursion</tourType>
                <description>Discover the history of Berlin.</description>
                <hotTour>false</hotTour>
                <price>1100</price>
                <quantity>25</quantity>
            </offer>
        </tourOffers>`
        );
        
        setXmlCode(`
            <?xml version="1.0" encoding="UTF-8"?>
            <xsl:stylesheet version="1.0"
                            xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
            
                <xsl:output method="html" indent="yes"/>
            
                <xsl:template match="/tourOffers">
                    <html>
                        <head>
                            <title>Туристичні пропозиції</title>
                        </head>
                        <body>
                            <h1>Туристичні пропозиції</h1>
                            <table border="1">
                                <tr>
                                    <th>Країна</th>
                                    <th>Тип туру</th>
                                    <th>Опис туру</th>
                                    <th>Гарячий тур</th>
                                    <th>Вартість</th>
                                    <th>Кількість</th>
                                </tr>
                                <!-- Додавання записів -->
                                <xsl:for-each select="offer">
                                    <tr>
                                        <td><xsl:value-of select="country"/></td>
                                        <td><xsl:value-of select="tourType"/></td>
                                        <td><xsl:value-of select="description"/></td>
                                        <td><xsl:value-of select="hotTour"/></td>
                                        <td><xsl:value-of select="price"/></td>
                                        <td><xsl:value-of select="quantity"/></td>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </body>
                    </html>
                </xsl:template>
            </xsl:stylesheet> `
        );

        setXslCode(`
            <?xml version="1.0" encoding="UTF-8"?>
            <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
                <xsl:output method="html" indent="yes"/>
            
                <!-- Головний шаблон -->
                <xsl:template match="/tourOffers">
                    <html>
                        <body>
                            <h2>Гарячі туристичні пропозиції</h2>
                            <table border="1">
                                <tr bgcolor="#9acd32">
                                    <th>Країна</th>
                                    <th>Тип туру</th>
                                    <th>Опис</th>
                                    <th>Вартість</th>
                                    <th>Кількість</th>
                                </tr>
            
                                <!-- Вибір гарячих турів та сортування за вартістю -->
                                <xsl:for-each select="offer[hotTour='true']">
                                    <xsl:sort select="price" data-type="number" order="ascending"/>
                                    <tr>
                                        <td><xsl:value-of select="country"/></td>
                                        <td><xsl:value-of select="tourType"/></td>
                                        <td><xsl:value-of select="description"/></td>
                                        <td><xsl:value-of select="hotTour"/></td>
                                        <td><xsl:value-of select="price"/></td>
                                        <td><xsl:value-of select="quantity"/></td>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </body>
                    </html>
                </xsl:template>
            </xsl:stylesheet>

        `
        );
        
        loadXmlAndXsl();
    }, []);

    const transformXml = (xmlText, xslText) => {
        try {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlText, "text/xml");
            const xsl = parser.parseFromString(xslText, "text/xml");

            // Створюємо XSLTProcessor
            const xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);

            // Виконуємо трансформацію
            const resultDocument = xsltProcessor.transformToFragment(xml, document);

            // Створюємо тимчасовий контейнер для збереження результатів
            const tempDiv = document.createElement('div');
            tempDiv.appendChild(resultDocument);

            // Витягуємо дані з HTML (якщо результати знаходяться в таблиці)
            const rows = tempDiv.querySelectorAll('tr'); // Отримуємо всі рядки таблиці
            const transformedData = [];

            rows.forEach((row, index) => {
                if (index > 0) { // Пропускаємо заголовок таблиці
                    const columns = row.querySelectorAll('td');

                    // Перевіряємо наявність стовпців
                    if (columns.length >= 6) {
                        const offer = {
                            country: columns[0]?.textContent || '',      // Перевірка наявності елементу
                            tourType: columns[1]?.textContent || '',
                            description: columns[2]?.textContent || '',
                            hotTour: columns[3]?.textContent === 'Так',
                            price: parseFloat(columns[4]?.textContent || '0'),
                            quantity: parseInt(columns[5]?.textContent || '0', 10),
                        };
                        transformedData.push(offer);
                    } else {
                        console.error('Expected at least 6 columns in the row, but found:', columns.length);
                    }
                }
            });

            return transformedData; // Повертаємо масив з об'єктами
        } catch (error) {
            console.error("Error during XML transformation:", error);
            return [];
        }
    };

    return (
        <Box className="p-6 m-5">
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>1. Створіть власні шаблони XSL. Як вихідний файл використовуйте результати робіт 6 і 7.</Text>
                    <Text>2. Виконайте сортування записів за одним із можливих критеріїв та фільтрацію даних за одним із можливих показників.</Text>
                    <VStack className="mt-6">
                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab9.jsx"
                        >
                            Коди програми
                        </Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">XML файли:</Text>
                <Box overflowX="auto">
                    <Tabs>
                        <TabList>
                            <Tab>XML</Tab>
                            <Tab>XML шаблон</Tab>
                            <Tab>XSL шаблон</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <pre style={{whiteSpace: 'pre-wrap'}}>
                                    <Code>
                                        {xmlDataCode}
                                    </Code>
                                </pre>
                            </TabPanel>
                            <TabPanel>
                                <pre style={{whiteSpace: 'pre-wrap'}}>
                                    <Code>
                                        {xmlCode}
                                    </Code>
                                </pre>
                            </TabPanel>
                            <TabPanel>
                                <pre style={{whiteSpace: 'pre-wrap'}}>
                                    <Code>
                                        {xslCode}
                                    </Code>
                                </pre>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">XML шаблон:</Text>
                <Box overflowX="auto">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Країна</Th>
                                <Th>Тип туру</Th>
                                <Th>Опис туру</Th>
                                <Th>Гарячий тур</Th>
                                <Th>Вартість</Th>
                                <Th>Кількість</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {offersXml && offersXml.map((offer, index) => (
                                <Tr key={index}>
                                    <Td>{offer.country}</Td>
                                    <Td>{offer.tourType}</Td>
                                    <Td>{offer.description}</Td>
                                    <Td>{offer.hotTour ? "Так" : "Ні"}</Td>
                                    <Td>{offer.price.toFixed(2)}</Td>
                                    <Td>{offer.quantity}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">XSL шаблон:</Text>
                <Box overflowX="auto">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Країна</Th>
                                <Th>Тип туру</Th>
                                <Th>Опис туру</Th>
                                <Th>Гарячий тур</Th>
                                <Th>Вартість</Th>
                                <Th>Кількість</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {offersXsl && offersXsl.map((offer, index) => (
                                <Tr key={index}>
                                    <Td>{offer.country}</Td>
                                    <Td>{offer.tourType}</Td>
                                    <Td>{offer.description}</Td>
                                    <Td>{offer.hotTour ? "Так" : "Ні"}</Td>
                                    <Td>{offer.price.toFixed(2)}</Td>
                                    <Td>{offer.quantity}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Box>
    );
};