# Define imagem base e um ALIAS para ela
FROM node:14-alpine AS build

# Cria um diretório no qual os comando subsequentes serão rodados
WORKDIR /app

# Copia os arquivos package json e joga dentro do diretório de trabalho /app ou ./
COPY package*.json ./

# Copia os arquivos do diretório /app e joga dentro de /usr/src/app da imagem base node
# COPY /app /usr/src/app

# Instala as dependencias 
RUN npm install

# Copia tudos os arquivos 
COPY . .

# Esse comando gera um versão compactada do React
RUN npm run build

# Define imagem base e um ALIAS para ela
FROM nginx:1.16.0-alpine AS prod

# Copia tudo do ALIAS build e do diretório de trabalho para dentro do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Abre uma porta de container para que seja possível se conectar com a do host
EXPOSE 80

# Ativa o nginx com deamon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
