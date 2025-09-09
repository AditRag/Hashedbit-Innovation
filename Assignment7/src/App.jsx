import { useEffect, useState } from "react";
import getPosts from ".";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
          <th>No</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.No}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.Team}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.Matches}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.Won}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.Lost}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.Tied}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.NRR}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
          <td>
        {data.length > 0 ? (
          <ul>
            {data
              .slice() // copy the array to avoid mutating state directly
              .sort((a, b) => a.NRR - b.NRR) // ascending sort
              .map((e, idx) => (
                <li key={idx}>{e.Points}</li>
              ))}
          </ul>
          
        ) : (
          <p>No Data found</p>
        )}
        </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
