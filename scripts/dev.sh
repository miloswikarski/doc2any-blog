#!/bin/bash

# Doc2Any Blog Development Script
set -e

echo "🛠️ Starting Doc2Any Blog in development mode..."

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if docker compose is available
if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please install Docker Compose plugin."
    exit 1
fi

# Start development environment
echo "🔄 Starting development services..."
docker compose -f docker-compose.dev.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 5

# Check if the application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Doc2Any Blog development server is running!"
    echo "🌐 Access your blog at: http://localhost:3000"
    echo "🔄 Hot reload is enabled - changes will be reflected automatically"
else
    echo "❌ Development server failed to start. Check logs with: docker compose -f docker-compose.dev.yml logs"
    exit 1
fi

echo "🎉 Development environment ready!"
