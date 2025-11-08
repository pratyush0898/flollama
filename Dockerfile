# Use Node.js 24 LTS (or any compatible version)
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Load environment variables from .env (available at build)
# Note: Docker Compose will provide the .env automatically

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
