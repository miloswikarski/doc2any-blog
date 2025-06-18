#!/bin/bash

# Doc2Any Blog Deployment Script for Apache2 Reverse Proxy
set -e

echo "🚀 Starting Doc2Any Blog deployment (Apache2 mode)..."

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

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker compose -f docker-compose.minimal.yml down 2>/dev/null || true

# Build and start the application
echo "📦 Building Docker images..."
docker compose -f docker-compose.minimal.yml build --no-cache

echo "🔄 Starting services..."
docker compose -f docker-compose.minimal.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 15

# Check if the application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Doc2Any Blog is running successfully!"
    echo "🌐 Application available at: http://localhost:3000"
    echo "📋 Configure your Apache2 virtual host to proxy to this port"
    echo ""
    echo "📝 Apache2 Configuration Example:"
    echo "   ProxyPass / http://localhost:3000/"
    echo "   ProxyPassReverse / http://localhost:3000/"
    echo "   ProxyPreserveHost On"
    echo ""
else
    echo "❌ Application failed to start. Check logs with: docker compose -f docker-compose.minimal.yml logs"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
echo "💡 Next steps:"
echo "   1. Configure Apache2 virtual host"
echo "   2. Update DNS to point to your server"
echo "   3. Test the site functionality"
