# Apache2 Setup Guide for Doc2Any Blog

This guide covers setting up the Doc2Any blog with Apache2 as a reverse proxy.

## 🚀 Quick Deployment

### 1. Deploy the Docker Container

```bash
# Use the Apache2-specific deployment script
./scripts/deploy-apache.sh

# Or manually with minimal compose
docker compose -f docker-compose.minimal.yml up -d
```

### 2. Configure Apache2

#### Enable Required Modules
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_wstunnel
sudo a2enmod ssl
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod expires
sudo a2enmod deflate
```

#### Copy Virtual Host Configuration
```bash
# Copy the provided configuration
sudo cp apache2/doc2any.conf /etc/apache2/sites-available/

# Edit the configuration to match your domain and SSL certificates
sudo nano /etc/apache2/sites-available/doc2any.conf

# Enable the site
sudo a2ensite doc2any.conf

# Test configuration
sudo apache2ctl configtest

# Reload Apache2
sudo systemctl reload apache2
```

## 📋 Configuration Details

### Docker Container
- **Port**: 3000
- **Health Check**: Built-in HTTP health check
- **Restart Policy**: unless-stopped
- **Environment**: Production optimized

### Apache2 Virtual Host Features
- **SSL/HTTPS**: Automatic HTTP to HTTPS redirect
- **Security Headers**: HSTS, X-Frame-Options, CSP
- **Compression**: Gzip for text content
- **Caching**: Long-term caching for static assets
- **Logging**: Separate error and access logs

## 🔧 Customization

### Domain Configuration
Update these lines in `/etc/apache2/sites-available/doc2any.conf`:
```apache
ServerName your-domain.com
ServerAlias www.your-domain.com
```

### SSL Certificate Paths
Update these paths to match your SSL certificates:
```apache
SSLCertificateFile /path/to/your/certificate.crt
SSLCertificateKeyFile /path/to/your/private.key
SSLCertificateChainFile /path/to/your/chain.crt
```

### Port Configuration
If you need to change the Docker port, update both:
1. `docker-compose.minimal.yml`: Change `"3000:3000"` to `"YOUR_PORT:3000"`
2. Apache2 config: Change `http://localhost:3000/` to `http://localhost:YOUR_PORT/`

## 🔍 Monitoring and Maintenance

### Check Container Status
```bash
# View running containers
docker compose -f docker-compose.minimal.yml ps

# View logs
docker compose -f docker-compose.minimal.yml logs -f

# Restart container
docker compose -f docker-compose.minimal.yml restart
```

### Apache2 Logs
```bash
# View error logs
sudo tail -f /var/log/apache2/doc2any_error.log

# View access logs
sudo tail -f /var/log/apache2/doc2any_access.log

# Check Apache2 status
sudo systemctl status apache2
```

### Health Checks
```bash
# Test application directly
curl -I http://localhost:3000

# Test through Apache2
curl -I https://your-domain.com

# Check SSL certificate
openssl s_client -connect your-domain.com:443 -servername your-domain.com
```

## 🔄 Updates and Deployment

### Update Application
```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker compose -f docker-compose.minimal.yml up -d --build
```

### Backup and Restore
```bash
# Backup (if using volumes)
docker compose -f docker-compose.minimal.yml down
docker run --rm -v doc2any-blog_data:/data -v $(pwd):/backup alpine tar czf /backup/backup.tar.gz -C /data .

# Restore
docker run --rm -v doc2any-blog_data:/data -v $(pwd):/backup alpine tar xzf /backup/backup.tar.gz -C /data
docker compose -f docker-compose.minimal.yml up -d
```

## 🛡️ Security Considerations

### Firewall Configuration
```bash
# Allow only necessary ports
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw deny 3000   # Block direct access to Docker container
sudo ufw enable
```

### SSL/TLS Best Practices
- Use strong SSL ciphers
- Enable HSTS with long max-age
- Consider using Let's Encrypt for free SSL certificates
- Regularly update SSL certificates

### Container Security
- Container runs as non-root user (nextjs:nodejs)
- Minimal attack surface with Alpine Linux base
- No unnecessary ports exposed
- Health checks for monitoring

## 🐛 Troubleshooting

### Common Issues

#### Container Won't Start
```bash
# Check logs
docker compose -f docker-compose.minimal.yml logs

# Check port conflicts
sudo netstat -tulpn | grep :3000

# Restart Docker service
sudo systemctl restart docker
```

#### Apache2 Proxy Issues
```bash
# Check Apache2 error logs
sudo tail -f /var/log/apache2/error.log

# Test proxy configuration
curl -H "Host: your-domain.com" http://localhost:3000

# Verify modules are enabled
apache2ctl -M | grep proxy
```

#### SSL Certificate Issues
```bash
# Test SSL configuration
sudo apache2ctl configtest

# Check certificate validity
openssl x509 -in /path/to/certificate.crt -text -noout

# Verify certificate chain
openssl verify -CAfile /path/to/chain.crt /path/to/certificate.crt
```

## 📞 Support

For Apache2-specific issues:
- Check Apache2 error logs: `sudo tail -f /var/log/apache2/error.log`
- Test configuration: `sudo apache2ctl configtest`
- Verify proxy modules: `apache2ctl -M | grep proxy`

For Docker issues:
- Check container logs: `docker compose -f docker-compose.minimal.yml logs`
- Verify container health: `docker compose -f docker-compose.minimal.yml ps`
- Test direct access: `curl http://localhost:3000`
