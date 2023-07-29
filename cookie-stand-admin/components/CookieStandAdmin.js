export default function CookieStandAdmin() {
    const { logout, login, user } = useAuth();
    const [cookieStand, setCookieStand] = useState('no created stands')
    const [allCookieStands, setAllCookieStands] = useState([])
    const hourly_sales = createRandomIntArray()
    function calculateLocationSales(hourly_sales) {
        let total = 0;
        for (let i = 0; i < hourly_sales.length; i++) {
            total += hourly_sales[i]
        }
        return total
    }

    function createRandomIntArray(length = hours.length, max = 100) {
        const result = [];
        for (let i = 0; i < length; i++) {
            const randomInt = Math.floor(Math.random() * max);
            result.push(randomInt);
        }
        return result;
    }

    function handleSubmit(event) {
        event.preventDefault();
        let latestStand = {
            location: event.target.location.value,
            minimum_customers_per_hour: event.target.minCustomers.value,
            maximum_customers_per_hour: event.target.maxCustomers.value,
            average_cookies_per_sale: event.target.avgCookies.value,
            hourly_sales: hourly_sales,
            location_sales: calculateLocationSales(hourly_sales)
        };
        setCookieStand(JSON.stringify(latestStand, null, 2));
        setAllCookieStands([...allCookieStands, latestStand])
    }
}