# 🎵 Spotify Clone

A modern Spotify-inspired music streaming application built with modern web technologies. Users can browse music, manage playlists, search songs, and enjoy a responsive music player experience.

![Spotify Clone Banner](./public/banner.png)

---

## ✨ Features

### 👤 Authentication
- User registration and login
- Secure authentication
- Protected routes

### 🎵 Music Management
- Browse songs and albums
- Search music by title or artist
- View song details
- Play/Pause controls

### 📂 Playlists
- Create playlists
- Add/remove songs
- Manage personal collections

### ❤️ Favorites
- Like songs
- Save favorite tracks
- Quick access to liked music

### 🔍 Search
- Real-time search
- Artist filtering
- Album discovery

### 📱 Responsive Design
- Desktop support
- Tablet support
- Mobile-friendly UI

---

## 🛠️ Tech Stack

### Frontend
- React / Next.js
- TypeScript
- Tailwind CSS
- Axios
- React Query (TanStack Query)

### Backend
- Node.js
- Express / Fastify
- TypeScript

### Database
- PostgreSQL
- Prisma ORM

### Authentication
- JWT
- OAuth (optional)

### Storage
- Cloudinary / AWS S3

### Real-time (Optional)
- Socket.IO

---

## 📁 Project Structure

```text
spotify-clone/
│
├── apps/
│   ├── web/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   └── utils/
│   │
│   └── api/
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── middleware/
│       │   └── utils/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── docker/
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js 20+
- pnpm
- PostgreSQL
- Git

Verify installation:

```bash
node -v
pnpm -v
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/spotify_clone"

JWT_SECRET="your-secret-key"

NEXT_PUBLIC_API_URL="http://localhost:3001"

CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/spotify-clone.git

cd spotify-clone
```

Install dependencies:

```bash
pnpm install
```

---

## 🗄️ Database Setup

Generate Prisma client:

```bash
pnpm prisma generate
```

Run migrations:

```bash
pnpm prisma migrate dev --name init
```

Seed database (optional):

```bash
pnpm prisma db seed
```

---

## ▶️ Running the Application

### Development

Start frontend:

```bash
pnpm --filter web dev
```

Start backend:

```bash
pnpm --filter api dev
```

Or run everything:

```bash
pnpm dev
```

---

## 🐳 Docker

Start all services:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

### Songs

```http
GET    /api/songs
GET    /api/songs/:id
POST   /api/songs
DELETE /api/songs/:id
```

### Playlists

```http
GET    /api/playlists
POST   /api/playlists
PUT    /api/playlists/:id
DELETE /api/playlists/:id
```

---

## 🧪 Testing

Run unit tests:

```bash
pnpm test
```

Run coverage:

```bash
pnpm test:coverage
```

---

## 🔒 Security

- JWT Authentication
- Password hashing with bcrypt
- Input validation
- Rate limiting
- Secure HTTP headers

---

## 📈 Future Improvements

- Lyrics integration
- Podcast support
- Audio visualization
- Social sharing
- Collaborative playlists
- AI-powered recommendations

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes

```bash
git commit -m "Add amazing feature"
```

4. Push to branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- Spotify for design inspiration
- React Team
- Next.js Team
- Prisma Team
- Tailwind CSS Team

---

⭐ If you find this project useful, consider giving it a star!