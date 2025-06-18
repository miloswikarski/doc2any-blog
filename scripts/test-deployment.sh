#!/bin/bash

# Doc2Any Blog Deployment Test Script
set -e

echo "🔍 Testing Doc2Any Blog deployment..."

# Check if container is running
echo "📋 Checking container status..."
if docker compose -f docker-compose.minimal.yml ps | grep -q "Up"; then
    echo "✅ Container is running"
else
    echo "❌ Container is not running"
    echo "📋 Container status:"
    docker compose -f docker-compose.minimal.yml ps
    echo ""
    echo "📋 Starting container..."
    docker compose -f docker-compose.minimal.yml up -d
    echo "⏳ Waiting 10 seconds for startup..."
    sleep 10
fi

# Check port availability
echo "📋 Checking port 3001..."
if netstat -tuln | grep -q ":3001 "; then
    echo "✅ Port 3001 is in use"
else
    echo "❌ Port 3001 is not in use"
fi

# Test HTTP response
echo "📋 Testing HTTP response..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 || echo "000")
echo "HTTP Status Code: $HTTP_CODE"

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Application is responding correctly"
elif [ "$HTTP_CODE" = "000" ]; then
    echo "❌ Cannot connect to application"
else
    echo "⚠️  Application returned HTTP $HTTP_CODE"
fi

# Test response content
echo "📋 Testing response content..."
RESPONSE=$(curl -s http://localhost:3001 2>/dev/null || echo "ERROR")
if echo "$RESPONSE" | grep -q "Doc2Any"; then
    echo "✅ Application content looks correct"
elif echo "$RESPONSE" | grep -q "Anonymous access is disabled"; then
    echo "❌ Database connection error detected"
    echo "This suggests the app is trying to connect to a database"
elif echo "$RESPONSE" | grep -q "ERROR"; then
    echo "❌ Cannot retrieve content from application"
else
    echo "⚠️  Unexpected response content"
    echo "First 200 characters of response:"
    echo "$RESPONSE" | head -c 200
fi

# Check container logs
echo "📋 Recent container logs:"
docker compose -f docker-compose.minimal.yml logs --tail=20 doc2any-blog

echo ""
echo "🔍 Diagnosis complete!"
echo "💡 If issues persist, check the logs above for error messages."
