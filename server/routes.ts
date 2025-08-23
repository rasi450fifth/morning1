import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // No API routes needed - the dashboard now only uses client-side functionality
  // (breathing exercise, habit tracking, and daily goals with localStorage)
  
  const httpServer = createServer(app);
  return httpServer;
}