#imagem base
FROM node:alpine

#cria um diretorio de trabalho
WORKDIR /usr/src/app

# Instalação das dependências
RUN npm install express --save
RUN npm install mysql2 --save

# Copia todos os arquivos do diretório atual para o diretório de trabalho do container
COPY index.js .

#copia do wait-for
COPY wait-for /usr/bin/

#seta permissoes para o wait-for
RUN chmod +x /usr/bin/wait-for

# Expoe a porta 3000
EXPOSE 3000

#inicia o servidor express
#CMD ["node", "index.js"]
