import { Link as RouterLink } from 'react-router-dom'
import {Alert, AlertIcon, Box, Button, FormControl, FormLabel, Input, Link, Text, VStack} from "@chakra-ui/react";
import {useState} from "react";

export const Lab4 = () => {
    return (
        <>
            <VStack>
                <Link fontSize="xl" fontWeight="bold" as={RouterLink} to='/mtip/lab4/registration' m-5>
                    Форма реєстрації
                </Link>

                <Link fontSize="xl" fontWeight="bold" as={RouterLink} to='/mtip/lab4/cyrillic' m-5>
                    Регулярний вираз
                </Link>
            </VStack>
        </>
    );
}

export const RegistrationForm  = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        organization: "",
        cardNumber: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [cardAttempts, setCardAttempts] = useState(0);

    const validateFields = () => {
        const newErrors = {};

        // Перевірка заповненості полів
        if (!formData.firstName) newErrors.firstName = "Ім'я обов'язкове";
        if (!formData.lastName) newErrors.lastName = "Прізвище обов'язкове";
        if (!formData.organization) newErrors.organization = "Організація обов'язкова";
        if (!formData.cardNumber) newErrors.cardNumber = "Номер картки обов'язковий";
        if (!formData.phone) newErrors.phone = "Номер телефону обов'язковий";
        if (!formData.email) newErrors.email = "Електронна адреса обов'язкова";

        // Перевірка правильності формату введених даних
        if (formData.firstName && !/^[a-zA-Zа-яА-Я]{2,}$/.test(formData.firstName)) {
            newErrors.firstName = "Некоректне ім'я";
        }

        if (formData.lastName && !/^[a-zA-Zа-яА-Я]{2,}$/.test(formData.lastName)) {
            newErrors.lastName = "Некоректне прізвище";
        }

        if (formData.phone && !/^\+?[\d\s-]{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Некоректний номер телефону";
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Некоректна електронна адреса";
        }

        if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber)) {
            newErrors.cardNumber = "Некоректний номер кредитної картки";
            setCardAttempts((prev) => prev + 1);
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateFields();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Форма успішно відправлена!");
            setCardAttempts(0);
        }
    };

    const handleClear = () => {
        setFormData({
            firstName: "",
            lastName: "",
            organization: "",
            cardNumber: "",
            phone: "",
            email: "",
        });
        setErrors({});
        setCardAttempts(0);
    };

    return (
        <>
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>
                        1. Створити сторінку з динамічним змістом &quot;Перевірка значень, введених користувачем поля форми для реєстрації&quot;.
                        Форма повинна містити поля «Ім&#39;я», «Прізвище», «Найменування організації», «Номер кредитної картки», «Номер телефону», «Адреса електронної пошти»,
                        кнопки «Надіслати» та «Очистити».
                    </Text>
                    <Text>
                        2. Здійснити перевірку заповненості даними всіх полів.
                    </Text>
                    <Text>
                        3. Побудувати шаблон для перевірки даних кредитної картки з обмеженням кількості спроб неправильного введення даних трьома.
                    </Text>
                    <Text>
                        4. Остання перевірка має контролювати структуру та вміст полів (правильність введення імені та прізвища, номери телефону, електронної адреси.).
                    </Text>

                    <VStack className="mt-6">
                        <Link fontWeight='bold' fontSize='24' href='https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab4.jsx'>Коди програми</Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <form onSubmit={handleSubmit}>
                    <FormControl mb={4}>
                        <FormLabel>Імя:</FormLabel>
                        <Input
                            placeholder="Введіть ваше ім'я"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                        {errors.firstName && <Alert status="error"><AlertIcon/>{errors.firstName}</Alert>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Прізвище:</FormLabel>
                        <Input
                            placeholder="Введіть ваше прізвище"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                        {errors.lastName && <Alert status="error"><AlertIcon/>{errors.lastName}</Alert>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Найменування організації:</FormLabel>
                        <Input
                            placeholder="Введіть назву організації"
                            value={formData.organization}
                            onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        />
                        {errors.organization && <Alert status="error"><AlertIcon/>{errors.organization}</Alert>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Номер кредитної картки</FormLabel>
                        <Input
                            placeholder="Введіть номер картки"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            isDisabled={cardAttempts >= 3}
                        />
                        {errors.cardNumber && <Alert status="error"><AlertIcon/>{errors.cardNumber}</Alert>}
                        {cardAttempts >= 3 && <Alert status="error"><AlertIcon/>Перевищено кількість спроб</Alert>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Номер телефону</FormLabel>
                        <Input
                            placeholder="Введіть номер телефону"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        {errors.phone && <Alert status="error"><AlertIcon/>{errors.phone}</Alert>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Адреса електронної пошти</FormLabel>
                        <Input
                            placeholder="Введіть електронну адресу"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        {errors.email && <Alert status="error"><AlertIcon/>{errors.email}</Alert>}
                    </FormControl>

                    <Button colorScheme="blue" mr={3} type="submit" isDisabled={cardAttempts >= 3}>
                        Надіслати
                    </Button>
                    <Button onClick={handleClear}>Очистити</Button>
                </form>
            </Box>
        </>
    );
};

export const CyrillicWordsFinder = () => {
    const [inputText, setInputText] = useState('');
    const [cyrillicWords, setCyrillicWords] = useState([]);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);

        // Регулярний вираз для пошуку слів з кириличних літер
        const regex = /[а-яА-ЯіїєґІЇЄҐ]+/g;
        const foundWords = text.match(regex) || [];
        setCyrillicWords(foundWords);
    };

    return (
        <>
            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <VStack spacing={4} align="stretch" className="p-6">
                    <Text fontSize="xl" fontWeight="bold">Завдання:</Text>
                    <Text>
                        Дано рядок &#39;ааа ббб її ззз ййй ААА БББ ЇЇ ЗЗЗ ЙЙЙ&#39;.
                        Напишіть регулярний вираз, який знайде всі слова за шаблоном: будь-яка кирилична літера будь-яку кількість разів.
                    </Text>
                    <VStack className="mt-6">
                        <Link fontWeight='bold' fontSize='24' href='https://github.com/Vitaliy738/mtip/blob/master/src/components/Lab4.jsx'>Коди програми</Link>
                    </VStack>
                </VStack>
            </Box>

            <Box className="p-6 bg-white rounded-md shadow-md m-5">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Пошук кириличних слів</h2>

                    <textarea
                        className="border-2 border-gray-300 rounded-md p-2 w-full mb-4"
                        rows="4"
                        placeholder="Введіть рядок"
                        value={inputText}
                        onChange={handleInputChange}
                    />

                    <h3 className="text-xl font-semibold">Знайдені слова:</h3>
                    <ul className="list-disc pl-5">
                        {cyrillicWords.length > 0 ? (
                            cyrillicWords.map((word, index) => <li key={index}>{word}</li>)
                        ) : (
                            <p>Немає кириличних слів.</p>
                        )}
                    </ul>
                </div>
            </Box>
        </>
    );
};