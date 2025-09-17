#!/bin/bash

echo "🚀 Starting Portfolio Backend Development Environment"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

echo "📦 Starting PostgreSQL database..."
docker-compose up -d

echo "⏳ Waiting for database to be ready..."
sleep 5

# Check if database is ready
until docker-compose exec postgres pg_isready -U strapi_dev -d portfolio_dev > /dev/null 2>&1; do
    echo "⏳ Waiting for database connection..."
    sleep 2
done

echo "✅ Database is ready!"
echo ""
echo "🔧 Copying development environment file..."
cp .env.development .env

echo "🚀 Starting Strapi in development mode..."
echo ""
echo "📝 Available commands:"
echo "  - npm run dev:stop    # Stop the database"
echo "  - npm run dev:db      # Start only the database"
echo ""

npm run develop