# User Notification Preferences API

This project is a serverless API for managing user notification preferences and sending notifications. It's built with Nest.js, TypeScript, and MongoDB, and can be deployed to Vercel.

## Features

- CRUD operations for user preferences
- Notification sending simulation
- Basic rate limiting
- Request logging
- Simple statistics tracking

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or cloud-based)

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/user-notification-preferences-api.git
   cd user-notification-preferences-api
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the development server:
   ```
   npm run start:dev
   ```

## Testing

Run the test suite:

```
npm run test
```

## Deployment to Vercel

1. Install the Vercel CLI:

   ```
   npm i -g vercel
   ```

2. Login to your Vercel account:

   ```
   vercel login
   ```

3. Deploy the project:

   ```
   vercel
   ```

4. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Add the `MONGODB_URI` environment variable with your MongoDB connection string

## API Documentation

### User Preferences

- `POST /api/preferences`: Create a new user preference
- `GET /api/preferences/:userId`: Get user preferences
- `PATCH /api/preferences/:userId`: Update user preferences
- `DELETE /api/preferences/:userId`: Delete user preferences

### Notifications

- `POST /api/notifications/send`: Send a notification
- `GET /api/notifications/:userId/logs`: Get notification logs for a user
- `GET /api/notifications/stats`: Get notification statistics

For detailed API documentation, please refer to the Swagger UI available at `/api-docs` when running the server locally.

## License

This project is licensed under the MIT License.
