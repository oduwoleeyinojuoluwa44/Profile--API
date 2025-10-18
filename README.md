# Profile API

This is a simple RESTful API endpoint that returns profile information along with a dynamic cat fact fetched from an external API.

## Requirements

-   **Endpoint:** `GET /me`
-   **Response Format:** JSON with `Content-Type: application/json`
-   **Response Structure:**
    ```json
    {
      "status": "success",
      "user": {
        "email": "<your email>",
        "name": "<your full name>",
        "stack": "<your backend stack>"
      },
      "timestamp": "<current UTC time in ISO 8601 format>",
      "fact": "<random cat fact from Cat Facts API>"
    }
    ```
-   **Dynamic Data:**
    -   `timestamp`: Current UTC time in ISO 8601 format, updates with each request.
    -   `fact`: Fetched from `https://catfact.ninja/fact` on each request.
-   **Error Handling:** Gracefully handles Cat Facts API failures.

## Technology Stack

-   **Language:** TypeScript
-   **Framework:** Node.js with Express
-   **Dependencies:** `express`, `node-fetch`, `cors`
-   **Development Dependencies:** `typescript`, `ts-node`, `nodemon`, `@types/express`, `@types/node`, `@types/node-fetch`

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/oduwoleeyinojuoluwa44/Profile--API.git
    cd profile-api
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the server on `http://localhost:3000`.

4.  **Test the endpoint:**
    Open your browser or use a tool like `curl` to access `http://localhost:3000/me`. You should receive a JSON response with your profile information and a random cat fact.

## Submission

For submission, ensure you have:
-   A GitHub repository with this code.
-   A clear `README.md` file.
-   A social media post detailing your work process.
-   Submitted the required URLs via the `/stage-zero-backend` command in Slack.
