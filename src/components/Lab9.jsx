import {
    Box,
    Button,
    Code,
    Link, Select,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export const Lab9 = () => {
    const [xmlDataCode, setXmlDataCode] = useState("");
    const [xslCode, setXslCode] = useState("");
    const [showHotTours, setShowHotTours] = useState(false);
    const [filteredTours, setFilteredTours] = useState([]);
    const [transformedContent, setTransformedContent] = useState("");

    useEffect(() => {
        // Завантаження XML та XSL файлів
        fetch('./tourOffers.xml')
            .then(response => response.text())
            .then(data => {
                setXmlDataCode(data);
            });

        fetch('./tourOffers.xsl')
            .then(response => response.text())
            .then(data => {
                setXslCode(data)
            });
    }, []);

    useEffect(() => {
        if (xslCode) {
            applyTransformation(xmlDataCode);
        }
    }, [xslCode, xmlDataCode]);

    const loadXMLString = (xmlString) => {
        const parser = new DOMParser();
        console.log(parser.parseFromString(xmlString, "text/xml"));
        return parser.parseFromString(xmlString, "text/xml");
    };

    const transformXML = (xml, xsl) => {
        const xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        console.log(xsltProcessor.transformToFragment(xml, document));
        return xsltProcessor.transformToFragment(xml, document);
    };

    const applyTransformation = (xmlData) => {
        try {
            const xml = loadXMLString(xmlData);
            const xsl = loadXMLString(xslCode);
            const resultDocument = transformXML(xml, xsl);
            setTransformedContent(resultDocument);
        } catch (error) {
            console.error("Помилка трансформації:", error);
        }
    };

    const filterTours = (filterValue) => {
        const xml = loadXMLString(xmlDataCode);
        const filteredToursArray = Array.from(xml.getElementsByTagName("tour")).filter(tour => {
            const hotTour = tour.getElementsByTagName("hotTour")[0].textContent === "true";

            if (filterValue === "hot") {
                return hotTour;
            }
            return true;
        });
        setFilteredTours(filteredToursArray); // Зберігаємо відфільтровані тури
        const filteredXML = createFilteredXML(filteredToursArray);
        applyTransformation(new XMLSerializer().serializeToString(filteredXML));
    };

    const createFilteredXML = (tours) => {
        const xmlString = `<tourOffers>${tours.map(tour => new XMLSerializer().serializeToString(tour)).join('')}</tourOffers>`;
        return loadXMLString(xmlString);
    };

    const sortTours = () => {
        const toursArray = filteredTours.length > 0 ? filteredTours : Array.from(loadXMLString(xmlDataCode).getElementsByTagName("tour"));

        toursArray.sort((a, b) => {
            const countryA = a.getElementsByTagName("country")[0].textContent;
            const countryB = b.getElementsByTagName("country")[0].textContent;
            return countryA.localeCompare(countryB);
        });

        const sortedXML = createFilteredXML(toursArray);
        applyTransformation(new XMLSerializer().serializeToString(sortedXML));
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
                                        {xslCode}
                                    </Code>
                                </pre>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Фільтрація та сортування:</Text>
                    <Select
                        value={showHotTours ? "hot" : "all"}
                        onChange={(e) => {
                            const value = e.target.value;
                            setShowHotTours(value === "hot");
                            filterTours(value);
                        }}
                        placeholder="Виберіть параметр для фільтрації"
                        m="4"
                    >
                        <option value="all">Показати всі тури</option>
                        <option value="hot">Показати тільки гарячі тури</option>
                    </Select>
                    <Button onClick={sortTours} colorScheme="green" m="4">Сортувати за країною</Button>
                </Box>

                <Box id="transformedContent" mt="6">
                    {transformedContent ? (
                        <div dangerouslySetInnerHTML={{ __html: new XMLSerializer().serializeToString(transformedContent) }} />
                    ) : (
                        <Text>Результати трансформації будуть відображені тут</Text>
                    )}
                </Box>
            </Box>
        </Box>
    );
};