function fetchData(url, callback)
{
    setTimeout(() => {

        const response = {
            data: "Sample Data"
        };

        callback(null, response);

    }, 2000);
}

fetchData("https://example.com", (error, result) => {

    if (error) {
        console.log(error);
    }
    else {
        console.log("Response");
        console.log(result);
    }

});