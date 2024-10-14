import { Box, Code, Link, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Lab8 = () => {
    const [xml, setXml] = useState("");
    const [dtdSchema, setDtdSchema] = useState("");
    const [xmlSchema, setXmlSchema] = useState("");

    useEffect(() => {
        const xml = `
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
        </tourOffers>`;
        setXml(xml);
        
        const xmlSchema = `
        <?xml version="1.0" encoding="UTF-8"?>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
          <xs:element name="tourOffers">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="tour" maxOccurs="unbounded">
                  <xs:complexType>
                    <xs:sequence>
                      <xs:element name="country" type="xs:string"/>
                      <xs:element name="type" type="xs:string"/>
                      <xs:element name="description" type="xs:string"/>
                      <xs:element name="hotTour" type="xs:boolean"/>
                      <xs:element name="price" type="xs:decimal"/>
                      <xs:element name="quantity" type="xs:int"/>
                    </xs:sequence>
                  </xs:complexType>
                </xs:element>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:schema>`;
        setXmlSchema(xmlSchema);

        const dtdSchema = `
        <!DOCTYPE tourOffers [
        <!ELEMENT tourOffers (tour+)>
        <!ELEMENT tour (country, type, description, hotTour, price, quantity)>
        <!ELEMENT country (#PCDATA)>
        <!ELEMENT type (#PCDATA)>
        <!ELEMENT description (#PCDATA)>
        <!ELEMENT hotTour (#PCDATA)>
        <!ELEMENT price (#PCDATA)>
        <!ELEMENT quantity (#PCDATA)>]>`;
        setDtdSchema(dtdSchema);

    }, []);

    return (
        <Box className="p-6 m-5">
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>1. Створити опис структури документа XML за допомогою DTD-схеми.</Text>
                    <Text>2. Виконати опис структури документа XML за допомогою XML Schema .</Text>
                    <VStack className="mt-6">
                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab8.jsx"
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

                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/public/tourOffers.dtd"
                        >
                            DTD схема
                        </Link>

                        <Link
                            fontWeight="bold"
                            fontSize="24"
                            href="https://github.com/Vitaliy738/mtip/blob/master/public/tourOffers.xsd"
                        >
                            XML схема
                        </Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">XML:</Text>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                    <Code>{xml}</Code>
                </pre>
            </Box>
            
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">DTD Schema:</Text>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                    <Code>{dtdSchema}</Code>
                </pre>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <Text fontSize="xl" fontWeight="bold">XML Schema:</Text>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                    <Code>{xmlSchema}</Code>
                </pre>
            </Box>
        </Box>
    );
}