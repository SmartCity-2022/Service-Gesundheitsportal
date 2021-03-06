![GitHub tag (latest SemVer)](https://shields.herrvergesslich.de/github/v/tag/smartcity-2022/service-gesundheitsportal?label=Version)
# Service-Gesundheitsportal
Microservice Gesundheitsportal

## Installation
* Backend/Frontend: `npm install`
* Backend: `cd src` `npx prisma db push`

## Starting
* Backend/Frontend: `npm run start`

## Umgebungsvariablen

### Backend
* `DATABASE_URL`: MySQL Addresse zur Verbindung der Datenbank <br>
Beispiel: `mysql://root:root@localhost:3306/gesundheitsportal?schema=public`
* `RABBITMQ_URL`: Addresse des RabbitMQ Servers <br>
Beispiel: `amqp://127.0.0.1:5672`
* `MAINHUB_URL`: Addresse des Mainhub Backends <br>
Beispiel: `https://mainhub.smartcity.w-mi.de`
* `SERVICE_HELLO`: Bezeichnung des RabbitMQ Events <br>
Beispiel: `service.hello`
* `SERVICE_WORLD`: Bezeichnung des RabbitMQ Events <br>
Beispiel: `service.world`
* `EXCHANGE`: Bezeichnung des RabbitMQ Exchanges <br>
Beispiel: `exchange`
* `SECRET`: Secret zum entschlüsseln eines Token <br>

### Frontend
* `REACT_APP_API` = Addresse für die Verbindung zum Backend <br>
Beispiel: `http://localhost:8080`
