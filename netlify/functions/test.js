exports.handler = async (event, context) => {
  console.log("Test");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };
};
