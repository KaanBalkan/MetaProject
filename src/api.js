export function fetchData(date) {
    // You can use the fetch API or any other library like axios to make a network request
    // to a server to retrieve the data
    return fetch(`https://your-api-endpoint.com/data?date=${date}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            throw new Error('An error occurred while fetching data: ' + error.message);
        });
}
