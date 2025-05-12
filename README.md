# File Explorer Web Application

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?logo=bun&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?logo=mysql&logoColor=white)

A modern file explorer web application with folder navigation, file previews, and search functionality.

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) v1.0+
- MySQL 8.0+
- Node.js 20+

### 1. Installation```bash
```
git clone https://github.com/dadansatria/windows-explorer.git
cd windows-explorer
bun install 
```

### 2. Database Setup
```
cp .env.example .env
```
Edit the .env file with your database credentials:


```
DATABASE_URL="mysql://your_username:your_password@localhost:3306/your_database"
```

### 3. Run Migration
```
bun migrate
```

### 4. Run Seed
```
bun seed
```

### 5. Start the app
```
bun start
```


The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### 6. Test the app
Run unit integration for backend and frontend side
```
bun run test
```
