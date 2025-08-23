# Personal Morning Dashboard

## Overview

This is a personal morning dashboard web application built as a React single-page application with an Express.js backend. The dashboard provides a comprehensive morning routine experience featuring educational content, habit tracking, weather information, prayer times, news updates, and various learning modules including French language lessons, science facts, historical knowledge, and interactive challenges. The application uses a modern Apple-inspired design with clean typography and responsive layouts optimized for both desktop and mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming and Apple-inspired design
- **State Management**: React hooks with custom localStorage hooks for data persistence
- **Data Fetching**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for weather, prayer times, and news data
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Client Storage**: localStorage for persisting user preferences, habits, and goals
- **Session Management**: In-memory storage for development with extensible interface for production

### Authentication and Authorization
- **User Management**: Basic user schema with username/password authentication
- **Session Storage**: Configurable storage interface supporting both memory and database sessions
- **Security**: Password hashing and session-based authentication ready for implementation

### External Dependencies
- **Weather API**: OpenWeatherMap integration for current conditions and forecasts
- **Prayer Times**: Aladhan API or similar for Islamic prayer time calculations
- **News Services**: BBC RSS feeds or News API for current events (international, US, business)
- **Database Provider**: Neon Database (PostgreSQL) for cloud database hosting
- **Styling**: Google Fonts integration for typography (DM Sans, Geist Mono, Fira Code)
- **Development Tools**: Replit-specific development enhancements and error overlay