export default function Form(props) {
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

