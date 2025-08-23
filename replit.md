# Personal Morning Dashboard

## Overview

A minimal personal morning dashboard web application built as a React single-page application with dark mode design. The dashboard provides a focused morning routine experience with just the essential elements: breathing exercise and personal planning tools.

## User Preferences

Preferred communication style: Simple, everyday language.
Theme: Dark mode enabled by default

## Current Features

### Core Functionality
- **Box Breathing Exercise**: 6-8-8-6 second breathing pattern with visual guide and timer
- **Habit Tracker**: Simple checkbox-based habit tracking with add/delete functionality
- **Daily Goals**: Text area for daily goal setting with automatic date-based archiving

### Design
- **Dark Theme**: Complete dark mode implementation with high contrast white text
- **Minimal Interface**: No headers, footers, or section titles - pure content focus
- **Apple-inspired Design**: Clean typography and responsive layouts optimized for desktop and mobile

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom dark mode CSS variables
- **State Management**: React hooks with localStorage for data persistence
- **Routing**: Wouter for lightweight client-side routing (minimal usage)

### Data Storage
- **Client Storage**: localStorage for persisting habits and daily goals
- **No Backend APIs**: All functionality is client-side only

### Key Files
- `client/src/pages/dashboard.tsx` - Main dashboard layout
- `client/src/components/dashboard/MorningCentering.tsx` - Box breathing component
- `client/src/components/dashboard/DailyPlanning.tsx` - Habits and goals components
- `client/src/components/ui/breathing-exercise.tsx` - Breathing exercise logic
- `client/src/hooks/use-local-storage.ts` - localStorage utilities
- `client/src/index.css` - Dark mode styling and custom CSS variables

### Removed Features
All educational content has been removed including:
- Weather integration
- Prayer times
- News feeds  
- French language learning
- Historical knowledge
- Science & math content
- Arts & culture
- Interactive challenges
- All external API dependencies

## Development Notes

The application has been completely streamlined to focus on personal productivity tools only. No server-side functionality is required beyond serving the static React application.