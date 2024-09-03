# Utilizar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install
RUN npm install bcryptjs --save


# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que Angular estará escuchando
EXPOSE 4200

# Comando para iniciar la aplicación con el servidor de desarrollo Angular
#CMD ["npm", "start"]
CMD ["npm", "start", "--", "--host", "0.0.0.0"]

