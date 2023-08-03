import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CreateForm({ createStand }) {
    const { user } = useAuth();
    const { createResource } = useResource();
    
    function handleSubmit(e){
        e.preventDefault();
        const info = {
          location: e.target.location.value,
          minimum_customers_per_hour: parseInt(e.target.minCustomers.value),
          maximum_customers_per_hour: parseInt(e.target.maxCustomers.value),
          average_cookies_per_sale: parseFloat(e.target.avgCookies.value),
          owner: user.id,
      };
        createResource(info);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="w-3/4 p-8 mx-auto my-10 bg-green-300 border-2 border-green-500 rounded h-50">
                    
                    <div className="flex justify-around">
                      <div className="flex flex-col">
                        <p className="text-center">LOCATION</p>
                        <input name="location" className="mb-4 w-96"/>
                      </div>

                    <button className="px-12 py-2 mb-4 text-black bg-green-500 rounded">CREATE STAND</button>
                    </div>
                    

                  <div className="flex justify-around mt-8">
                    
                    <div className="flex-col text-center">
                      <p>MINIMUM CUSTOMERS PER HOUR</p>
                      <input name="minCustomers" className="w-64"/>
                    </div>

                    <div className="flex-col text-center">
                      <p>MAXIMUM CUSTOMERS PER HOUR</p>
                      <input name="maxCustomers" className="w-64"/>
                    </div>

                    <div className="flex-col text-center">
                      <p>AVERAGE COOKIES PER SALE</p>
                      <input name="avgCookies" className="w-64"/>
                    </div>

                    
                      
                    
                  </div>
                </form>
    );
}