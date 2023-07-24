import Header from '../components/Header';
import Placeholder from '../components/Placeholder';
import Form from '../components/CreateForm';
import Head from 'next/head';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';
import { hours } from '../data';


export default function CookieStandAdmin() {

    const [cookieStand, setCookieStand] = useState('no created stands')
    const [allCookieStands, setAllCookieStands] = useState([])
    const hourly_sales = createRandomIntArray()
    function calculateLocationSales(hourly_sales){
        let total = 0;
        for(let i = 0; i < hourly_sales.length; i++){
            total += hourly_sales[i]
        }
        return total
    }
        function createRandomIntArray(length = hours.length, max=100) {
        const result = [];
        for (let i = 0; i < length; i++) {
          const randomInt =  Math.floor(Math.random() * max);
          result.push(randomInt);
        }
        return result;
      }      

    function handleSubmit(event) {
        event.preventDefault();
        let latestStand = {
            location: event.target.location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value,
            hourly_sales : hourly_sales,
            location_sales : calculateLocationSales(hourly_sales)
        };
        setCookieStand(JSON.stringify(latestStand, null, 2));
        setAllCookieStands([...allCookieStands, latestStand])
    }
    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main>
                {/* Main content */}
                <Form handler={handleSubmit} />
                <Placeholder cookieStand={cookieStand} />
                <ReportTable allCookieStands={allCookieStands} />
                
            </main>
            <Footer/>
        </div>
    );
}


