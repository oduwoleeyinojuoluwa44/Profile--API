import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// User details
const userEmail = "oduwoleeyinojuoluwa44@gmail.com";
const userName = "eyinojuoluwa";
const userStack = "Node.js/Express with TypeScript";
const catFactsApiUrl = "https://catfact.ninja/fact";

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// GET /me endpoint
app.get('/me', async (req: Request, res: Response) => {
  try {
    // Fetch cat fact
    const catFactResponse = await fetch(catFactsApiUrl, { timeout: 5000 }); // 5 second timeout
    let catFact = "Could not fetch a cat fact at this time.";

    if (catFactResponse.ok) {
      const catFactData = await catFactResponse.json();
      catFact = catFactData.fact;
    } else {
      console.error(`Cat Facts API error: ${catFactResponse.status} ${catFactResponse.statusText}`);
      // Optionally, you could send a specific error response here
    }

    // Get current UTC timestamp
    const timestamp = new Date().toISOString();

    // Construct the response
    const responseData = {
      status: "success",
      user: {
        email: userEmail,
        name: userName,
        stack: userStack,
      },
      timestamp: timestamp,
      fact: catFact,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error processing /me request:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred.",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
