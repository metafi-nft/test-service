module.exports.createError = (errorType, message) => ({
    statusCode: 403,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
        error: message
    }),
});

module.exports.createResponse = (data) => ({
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
});

