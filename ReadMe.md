#  Smart Orders System

An advanced order management system consisting of two servers (C# .NET and Node.js) and a React client.
The project features a layered, modular architecture, built for scalability and professional maintainability.

---
##  Tech Stack

- **Client (Frontend)**: React, TypeScript, Redux Toolkit, Axios, Formik, MUI  
- **Backend 1 (API - .NET)**: ASP.NET Core, Entity Framework, SQL Server  
- **Backend 2 (API - Node.js)**: Express, TypeScript, MongoDB  

---


##  Project Structure

root/   
│
├── client/ ←  React vite   
│
├── server-net/ ← .NET 8 + EF + SQL Server   
│
├── server-node/ ←  Node.js + TypeScript + MongoDB   
│
└── README.md   

## clone project   
https://github.com/Efrat807/homeTask-7-2025/tree/master

## add .env file to server-node:
```  
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/orders
```  

### runs:  
- for client:    
```   
cd client
npm install
npm run dev
```   

- for server-node:
```   
cd server-node
npm install
npm run dev
```   

- for server dotnet:
open sln file by visual studio and run there


## install
mongoDB  
node

## add database to your sqlServer   
in server-net run in the terminal:
```   
dotnet ef database update -p ../Repository/Repository.csproj -s server-net.csproj
```   
### the collection in mongoDB will be automatically
