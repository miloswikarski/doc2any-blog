# Docker Deployment Guide for Doc2Any Blog

This guide covers deploying the Doc2Any blog using Docker and Docker Compose for both development and production environments.

## 🐳 Prerequisites

- Docker 20.10+ with Compose plugin
- At least 2GB RAM available
- Ports 80, 443, 3000, 3001, 8080, 9090 available

## 🚀 Quick Start

### Production Deployment

```bash
# Clone and navigate to project
git clone <your-repo>
cd doc2any-blog

# Deploy with one command
./scripts/deploy.sh
```

### Development Environment

```bash
# Start development environment
./scripts/dev.sh
```

## 📋 Available Services

### Core Services

#### doc2any-blog

- **Port**: 3000
- **Description**: Main Next.js application
- **Health Check**: `http://localhost:3000`

### Optional Services

#### Traefik (Reverse Proxy)

- **Ports**: 80 (HTTP), 443 (HTTPS), 8080 (Dashboard)
- **Description**: Automatic SSL with Let's Encrypt
- **Dashboard**: `http://localhost:8080`
- **Features**:
  - Automatic SSL certificates
  - Load balancing
  - Request routing

#### Redis (Caching)

- **Port**: 6379
- **Description**: In-memory caching layer
- **Use Cases**:
  - Session storage
  - API response caching
  - Rate limiting

#### Prometheus (Metrics)

- **Port**: 9090
- **Description**: Metrics collection and monitoring
- **Dashboard**: `http://localhost:9090`
- **Metrics Collected**:
  - Application performance
  - HTTP requests
  - System resources

#### Grafana (Visualization)

- **Port**: 3001
- **Description**: Metrics visualization dashboard
- **Dashboard**: `http://localhost:3001`
- **Default Login**: admin/admin123

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Application
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Analytics
NEXT_PUBLIC_GA_ID=UA-47319849-1
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-2591708616273466

# Domain (for SSL)
DOMAIN=doc2any.grapph.com

# Monitoring
GRAFANA_ADMIN_PASSWORD=your-secure-password

# Email for Let's Encrypt
ACME_EMAIL=info@grapph.com
```

### Custom Domain Setup

1. Update `docker-compose.yml`:

```yaml
labels:
  - "traefik.http.routers.doc2any.rule=Host(`your-domain.com`)"
```

2. Point your domain's DNS to your server's IP

3. Traefik will automatically obtain SSL certificates

## 📦 Docker Commands Reference

### Basic Operations

```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f

# Restart specific service
docker compose restart doc2any-blog

# Update and rebuild
docker compose pull
docker compose up -d --build
```

### Development Commands

```bash
# Start development environment
docker compose -f docker-compose.dev.yml up -d

# View development logs
docker compose -f docker-compose.dev.yml logs -f

# Stop development environment
docker compose -f docker-compose.dev.yml down
```

### Maintenance Commands

```bash
# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune

# Full cleanup
docker system prune -a --volumes

# Backup volumes
docker run --rm -v doc2any-blog_redis-data:/data -v $(pwd):/backup alpine tar czf /backup/redis-backup.tar.gz -C /data .
```

## 🔍 Monitoring and Logs

### Application Logs

```bash
# View application logs
docker compose logs -f doc2any-blog

# View last 100 lines
docker compose logs --tail=100 doc2any-blog
```

### Health Checks

```bash
# Check if services are running
docker compose ps

# Test application health
curl -f http://localhost:3000/api/health || echo "Service down"

# Check Traefik dashboard
curl -f http://localhost:8080/api/rawdata || echo "Traefik down"
```

### Performance Monitoring

Access Grafana at `http://localhost:3001` to view:

- Request rates and response times
- Error rates and status codes
- System resource usage
- Custom application metrics

## 🛡️ Security Considerations

### Production Security

- Change default passwords in `.env`
- Use strong passwords for Grafana
- Regularly update Docker images
- Monitor access logs
- Enable firewall rules

### SSL/TLS

- Traefik automatically handles SSL certificates
- Certificates are stored in `traefik-letsencrypt` volume
- Automatic renewal every 60 days

## 🔄 Updates and Maintenance

### Application Updates

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker compose up -d --build doc2any-blog
```

### System Updates

```bash
# Update all images
docker compose pull

# Restart with new images
docker compose up -d
```

### Backup Strategy

```bash
# Backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
docker run --rm -v doc2any-blog_redis-data:/data -v $(pwd)/backups:/backup alpine tar czf /backup/redis_$DATE.tar.gz -C /data .
docker run --rm -v doc2any-blog_traefik-letsencrypt:/data -v $(pwd)/backups:/backup alpine tar czf /backup/ssl_$DATE.tar.gz -C /data .
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

#### SSL Certificate Issues

```bash
# Check Traefik logs
docker compose logs traefik

# Verify domain DNS
nslookup your-domain.com

# Test ACME challenge
curl -I http://your-domain.com/.well-known/acme-challenge/test
```

#### Application Won't Start

```bash
# Check application logs
docker compose logs doc2any-blog

# Verify build
docker compose build --no-cache doc2any-blog

# Check disk space
df -h
```

### Performance Issues

```bash
# Check resource usage
docker stats

# Monitor system resources
htop

# Check application metrics
curl http://localhost:3000/api/metrics
```

## 📞 Support

For Docker-specific issues:

- Check logs: `docker compose logs`
- Verify configuration: `docker compose config`
- Test connectivity: `docker compose exec doc2any-blog ping redis`

For application issues, refer to the main README.md file.
