import { hours } from '../data';
import TrashIcon from './TrashIcon';
import { v4 as uuidv4 } from 'uuid';


export default function ReportTable({ cookieStandList, deleteStand }) {
    
    const hour_idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let total_of_totals = 0
    
    function getRowTotal(arr) {
        let total_sum = 0;
        for (let num of arr) {
            total_sum += num
        }
        // Updates total total for final table entry
        total_of_totals += total_sum
        return total_sum;
    }

    function getColTotal(idx) {
        let total_sum = 0;
        for (let stand of cookieStandList) {
            total_sum += stand.hourly_sales[idx]
        }
        return total_sum
    }

    function handleDelete(id) {
        deleteStand(id);
    }
    
    if (cookieStandList.length === 0) {
        return (
            <h2 className="w-1/2 mx-auto my-8 text-4xl text-center">No Cookie Stands Available</h2>
        );
    } else {
        return (
            <table className="w-3/4 mx-auto my-4 text-center">
                <thead>
                    <tr className="bg-green-400">
                        <th className="border border-green-600">Location</th>
                        {hours.map((hour,idx) => (
                            <th className="border border-green-600" key={idx}>{hour}</th>
                        ))}
                        <th className="border border-green-600">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {cookieStandList.map(stand => (
                        (<tr className="even:bg-green-100 odd:bg-green-300" key={stand.id}>
                            <td className="flex items-center justify-between px-2 border border-green-600">{stand.location} <TrashIcon onClick={(e) => handleDelete(stand.id, e)} className="h-4"/></td>
                            {stand.hourly_sales.map(sale => (
                                <td className="border border-green-600" key={uuidv4()}>{sale}</td>
                            ))}
                            <td className="border border-green-600">{getRowTotal(stand.hourly_sales)}</td>
                        </tr>)
                    ))}

                    <tr className="font-bold bg-green-400">
                        <td className="border border-green-600">Totals</td>
                        {hour_idx.map(idx => (
                            <td className="border border-green-600" key={uuidv4()}>{getColTotal(idx)}</td>
                        ))}
                        <td className="border border-green-600">{total_of_totals}</td>
                    </tr>
                    
                </tbody>
            </table>
        );
    };
}