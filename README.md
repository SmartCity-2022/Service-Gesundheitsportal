# Service-Gesundheitsportal
Microservice Gesundheitsportal

### Backend Database Command
- cd src
- npx prisma db push 

### Backend Variables
- **DATABASE_URL** = *mysql://root:root@localhost:3306/gesundheitsportal?schema=public*
- **RABBITMQ_URL** = *amqp://127.0.0.1:5672*
- **EXCHANGE** = *exchange*

### Frontend Variables
- **REACT_APP_API** = *http://localhost:8080/*