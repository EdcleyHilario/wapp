# Solução multiatendentes gratuita para gerenciar conversas do WhatsApp de forma mais eficiente
# 34.125.176.104
# Servidor Ubuntu 20.04
# Registro A apontando para o IP do Server.  
#  whaticket.webconfiavel.com.br
#  api.webconfiavel.com.br

sudo apt-get update
apt-get upgrade
sudo apt-get install -y libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils git
sudo apt-get install build-essential
sudo apt update && sudo apt upgrade
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
curl -fsSL https://get.docker.com | bash
sudo apt-get install docker-compose

docker run -e TZ="America/Sao_Paulo" --name postgresql -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=P@ssw0rd1401 -p 5432:5432 -d --restart=always -v /data:/var/lib/postgresql/data -d postgres

docker run -e TZ="America/Sao_Paulo" --name redis-rwebtec -p 6379:6379 -d --restart=always redis:latest redis-server --appendonly yes --requirepass "P@ssw0rd1401"

git clone https://github.com/EdcleyHilario/wapp.git

cd wapp/backend/
cp .env.example .env
nano .env
cd /frontend
npm install
npm run build
docker exec -ti NAME_OF_CONTAINER psql -U YOUR_POSTGRES_USERNAME
create database whaticket;
exit
npm run db:migrate
npm run db:seed

cd ../frontend/

cp .env.example .env

nano .env

npm install
npm run build

# Instale o pm2

sudo npm install -g pm2

cd ../backend

pm2 start dist/server.js --name whaticket-backend

cd ../frontend

pm2 start server.js --name whaticket-frontend

pm2 startup ubuntu -u root

pm2 save --force

sudo apt install nginx

cd /etc/nginx/sites-enabled

sudo rm default

# Crie o site para o Backend
sudo nano /etc/nginx/sites-available/whaticket-backend

# Crie o site para o frontend
sudo nano /etc/nginx/sites-available/whaticket-frontend

# Crie os links simbólicos para habilitar os sites:
sudo ln -s /etc/nginx/sites-available/whaticket-backend /etc/nginx/sites-enabled
sudo ln -s /etc/nginx/sites-available/whaticket-frontend /etc/nginx/sites-enabled

# alterar a configuração do nginx para aceitar 20MB de corpo nas requisições:
sudo nano /etc/nginx/nginx.conf
# acrescente essa diretiva 
client_max_body_size 20M;

# teste a syntax no arquivo
sudo nginx -t
sudo service nginx restart

# Instale o certbor com snapd:
sudo snap install --classic certbot

# Habilite SSL com nginx:
sudo certbot --nginx














