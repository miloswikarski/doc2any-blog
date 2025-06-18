#!/bin/bash

# Doc2Any Blog Deployment Script
set -e

echo "🚀 Starting Doc2Any Blog deployment..."

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

# Build and start the application
echo "📦 Building Docker images..."
docker compose build --no-cache

echo "🔄 Starting services..."
docker compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Check if the application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Doc2Any Blog is running successfully!"
    echo "🌐 Access your blog at: http://localhost:3000"
    echo "📊 Traefik dashboard: http://localhost:8080"
    echo "📈 Grafana dashboard: http://localhost:3001 (admin/admin123)"
    echo "📊 Prometheus: http://localhost:9090"
else
    echo "❌ Application failed to start. Check logs with: docker compose logs"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
