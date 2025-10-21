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

    // Log the submission (Netlify will capture this)
    console.log("Contact form submiss

    // Send data to Zapier webhook
    const webhookUrl = "https://hooks.zapier.com/hooks/catch/24626192/uri5pn9/";
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, idea }),
    })io

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Form submitted successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
