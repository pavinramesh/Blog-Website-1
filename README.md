# Blog Application using MERN Stack and Generative AI

A modern blogging platform built with the MERN (MongoDB, Express.js, React, Node.js) stack and enhanced with Generative AI capabilities. This application provides a robust platform for content creators to write, manage, and optimize their blog posts with AI assistance.

## Features

### User Authentication & Authorization
- Secure user registration and login system
- Social media authentication integration (Google, Facebook)
- Role-based access control (Admin, Editor, Reader)
- JWT-based authentication

### Blog Post Management
- Rich text editor with formatting options
- Markdown support
- Drag-and-drop media upload
- Comment system
- Post categorization and tagging

### AI-Powered Features
- AI-assisted content generation
- SEO optimization suggestions
- Automated tag recommendations
- Title generation assistance
- Content improvement suggestions

### Mobile Responsiveness
- Adaptive layouts for all device sizes
- Dynamic UI adjustments
- Optimized media display
- Touch-friendly interface

### Admin Dashboard
- User management
- Content moderation
- Analytics tracking
- Site settings management

## Tech Stack

### Frontend
- React.js
- CSS3 with Flexbox and Grid
- Responsive design principles
- Media queries for device compatibility

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication

### AI Integration
- Generative AI models for content assistance
- AI-powered SEO optimization
- Real-time content suggestions

## Installation

1. Clone the repository
```bash
git clone https://github.com/Praneetm1403/Blog-Website.git
cd blog-application
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_service_api_key
```

4. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```

## Usage

### User Roles

1. **Admin**
   - Access to admin dashboard
   - Manage users and content
   - Full system control

2. **Editor**
   - Create and edit blog posts
   - Moderate comments
   - Access content management

3. **Reader**
   - Read blog posts
   - Leave comments
   - Manage profile

### Content Creation

1. Use the rich text editor to create posts
2. Utilize AI suggestions for content improvement
3. Add media through drag-and-drop
4. Apply tags and categories
5. Preview before publishing

## Testing

The application includes comprehensive testing:

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e
```

## Security Features

- JWT authentication
- Password encryption
- Input validation
- XSS protection
- CSRF protection
- Rate limiting

## Future Enhancements

- Advanced AI content generation
- Improved SEO optimization
- Enhanced mobile responsiveness
- Real-time collaboration features
- Extended analytics capabilities

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Team Members

- Praneet Mahendrakar - 22070122155
- Prishita Rayapura - 22070122160
- Pavin R - 23070122509
- Riya Mude - 23070122510
- Anushka Hegade - 23070122516

## License

This project is licensed under the MIT License - see the LICENSE file for details.
