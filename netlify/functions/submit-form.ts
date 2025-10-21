import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { name, email, idea } = data;

    if (!name || !email || !idea) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    console.log("Contact form submission received", { name, email });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
