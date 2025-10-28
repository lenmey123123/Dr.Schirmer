import { promises as fs } from 'fs';
import path from 'path';

export interface AlertSettings {
  isVisible: boolean;
  text: string;
  lastUpdated: string;
}

export interface NewsPost {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  color: string;
  published: boolean;
}

// Paths to data files
const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const ALERT_SETTINGS_PATH = path.join(DATA_DIR, 'alert-settings.json');
const NEWS_POSTS_PATH = path.join(DATA_DIR, 'news-posts.json');

/**
 * Reads alert settings from JSON file
 * Used during build time for static generation
 */
export async function getAlertSettings(): Promise<AlertSettings> {
  try {
    const fileContent = await fs.readFile(ALERT_SETTINGS_PATH, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading alert settings:', error);
    // Fallback to default settings
    return {
      isVisible: true,
      text: 'Aktuell: Dr. Schuster-Meinel ist nun Fachärztin in Zschorlau | Neue Kindersprechstunde | Neuaufnahmen möglich',
      lastUpdated: new Date().toISOString()
    };
  }
}

/**
 * Reads all news posts from JSON file
 * Used during build time for static generation
 */
export async function getAllNewsPosts(): Promise<NewsPost[]> {
  try {
    const fileContent = await fs.readFile(NEWS_POSTS_PATH, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading news posts:', error);
    // Fallback to default posts
    return [
      {
        id: "1",
        title: "Praxis-Urlaub",
        description: "Vom 15. bis 30. Dezember bleibt unsere Praxis geschlossen. In dringenden Fällen wenden Sie sich an den ärztlichen Bereitschaftsdienst.",
        date: "2024-12-01",
        icon: "calendar",
        color: "yellow",
        published: true
      }
    ];
  }
}

/**
 * Reads only published news posts from JSON file
 * Used during build time for static generation
 */
export async function getNewsPosts(): Promise<NewsPost[]> {
  const allPosts = await getAllNewsPosts();
  return allPosts.filter(post => post.published);
}

/**
 * Writes alert settings to JSON file
 * Used by admin API to update settings
 */
export async function saveAlertSettings(settings: AlertSettings): Promise<void> {
  try {
    const updatedSettings = {
      ...settings,
      lastUpdated: new Date().toISOString()
    };
    await fs.writeFile(ALERT_SETTINGS_PATH, JSON.stringify(updatedSettings, null, 2));
    console.log('✅ Alert settings saved to file');
  } catch (error) {
    console.error('Error saving alert settings:', error);
    throw error;
  }
}

/**
 * Writes news posts to JSON file
 * Used by admin API to update posts
 */
export async function saveNewsPosts(posts: NewsPost[]): Promise<void> {
  try {
    await fs.writeFile(NEWS_POSTS_PATH, JSON.stringify(posts, null, 2));
    console.log('✅ News posts saved to file');
  } catch (error) {
    console.error('Error saving news posts:', error);
    throw error;
  }
}

/**
 * Adds or updates a single news post
 * Used by admin API to manage individual posts
 */
export async function saveNewsPost(post: NewsPost): Promise<void> {
  const allPosts = await getAllNewsPosts();
  const existingIndex = allPosts.findIndex(p => p.id === post.id);
  
  if (existingIndex >= 0) {
    allPosts[existingIndex] = post;
  } else {
    allPosts.push(post);
  }
  
  await saveNewsPosts(allPosts);
}

/**
 * Deletes a news post by ID
 * Used by admin API to remove posts
 */
export async function deleteNewsPost(id: string): Promise<void> {
  const allPosts = await getAllNewsPosts();
  const filteredPosts = allPosts.filter(post => post.id !== id);
  await saveNewsPosts(filteredPosts);
}
