# Init

## Client

```sh
cd /usr/share/nginx/code/unitz.nguyenanhvu.com
yarn
yarn build:production
```

## Nginx

```sh
sudo cp /usr/share/nginx/code/unitz.nguyenanhvu.com/nginx/unitz.nguyenanhvu.com.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/unitz.nguyenanhvu.com.conf /etc/nginx/sites-enabled/
sudo certbot --nginx
```

# Deploy production

## Client

```sh
cd /usr/share/nginx/code/unitz.nguyenanhvu.com && yarn deploy
```