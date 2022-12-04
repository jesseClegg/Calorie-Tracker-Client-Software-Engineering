import React, {useState} from 'react';


const GetActivitiesRequestButton = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
        debugger;
      const response = await fetch('http://localhost:3000/api/getAllActivities',
          {
            method: 'GET',
            crossorigin: true,
            Body: {
                email: "jesse"
            }
          });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result.body, null, 4));
      console.log(result.body);
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);

    }
  };

  console.log(data);

  return (
      <div>
        {err && <h2>{err}</h2>}

        <button onClick={handleClick}>Get Request Activities</button>

        {isLoading && <h2>Loading...</h2>}

        {data && (
            <div>
              <h2>{data.id}</h2>
              <h2>{data.name}</h2>
            </div>
        )}
      </div>
  );
};

export default GetActivitiesRequestButton;
