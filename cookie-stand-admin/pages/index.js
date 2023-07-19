aimport Head from 'next/head';
import { useState } from 'react';


export default function Home() {

    const [cookieStand, setCookieStand] = useState('no created stands')
    function handleSubmit(event) {
        event.preventDefault();
        let latestStand = {
            location: event.target.location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value
        };
        setCookieStand(JSON.stringify(latestStand, null, 2));
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
            </main>
            <footer className="p-4 mt-8 bg-green-500">
                <p>&copy; 2023</p>
            </footer>
        </div>
    );
}

function Header() {
    return (
        <div className="flex items-center justify-between p-4 bg-green-500">
            <h1 className="text-4xl">
                Cookie Stand Admin
            </h1>
        </div>
    );
}

function Form(props) {
    return (
        <div className="w-3/4 p-8 mx-auto my-10 bg-green-300 border-2 border-green-500 rounded text-center">
            <h2 className="text-2xl">Create Cookie Stand</h2>
            <form onSubmit={props.handler}>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-left">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full p-2 border-2 border-gray-400 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="minCustomers" className="block text-left">Minimum Customers per Hour</label>
                    <input
                        type="number"
                        id="minCustomers"
                        name="minCustomers"
                        className="w-full p-2 border-2 border-gray-400 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="maxCustomers" className="block text-left">Maximum Customers per Hour</label>
                    <input
                        type="number"
                        id="maxCustomers"
                        name="maxCustomers"
                        className="w-full p-2 border-2 border-gray-400 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="avgCookies" className="block text-left">Average Cookies per Sale</label>
                    <input
                        type="number"
                        id="avgCookies"
                        name="avgCookies"
                        className="w-full p-2 border-2 border-gray-400 rounded"
                    />
                </div>

                <button className="w-full p-2 mt-4 bg-green-500 rounded" type='submit'>Create</button>
            </form>
        </div>
    );
}

function Placeholder(props) {
    return (
        <div className="w-3/4 p-8 mx-auto my-10 bg-green-300 border-2 border-green-500 rounded text-center">
            <h2 className="text-2xl">Last created stand:</h2>
            <p className="text-center">{props.cookieStand}</p>
        </div>
    )
}
