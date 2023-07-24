import { hours } from "../data";

export default function ReportTable(props) {
  function calculate_vertical_totals(index) {
    let total = 0;
    props.allCookieStands.forEach((stand) => {
      total += stand.hourly_sales[index];
    });
    return total;
  }

  function calculate_total_of_totals() {
    let total = 0;
    props.allCookieStands.forEach((stand) => {
      total += stand.location_sales;
    });
    return total;
  }

  return (
    <div className="w-3/4 p-8 mx-auto my-10 bg-green-300 border-2 border-green-500 rounded text-center">
      <h2 className="text-2xl">Sales Report</h2>
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="px-4 py-2">Location</th>
              {hours.map((hour, index) => (
                <th key={index} className="px-2 py-2"> {/* Reduce cell width */}
                  {hour}
                </th>
              ))}
              <th className="px-2 py-2"> {/* Reduce cell width */}
                Totals
              </th>
            </tr>
          </thead>
          <tbody>
            {props.allCookieStands.map((stand, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2">{stand.location}</td>
                {stand.hourly_sales.map((sale, index) => (
                  <td key={index} className="px-2 py-2"> {/* Reduce cell width */}
                    {sale}
                  </td>
                ))}
                <td className="px-2 py-2"> {/* Reduce cell width */}
                  {stand.location_sales}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-green-500 text-white">
              <td className="px-4 py-2">Totals</td>
              {hours.map((hour, index) => (
                <td key={index} className="px-2 py-2"> {/* Reduce cell width */}
                  {calculate_vertical_totals(index)}
                </td>
              ))}
              <td className="px-2 py-2"> {/* Reduce cell width */}
                {calculate_total_of_totals()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
