exports.handler = async (event, context) => {
  console.log("hello worldsz!");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };
};
