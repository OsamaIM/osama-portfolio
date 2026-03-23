'use server';

import { Redis } from '@upstash/redis';
import { revalidatePath } from 'next/cache';

// 1. Connect to the database using your .env.local variables
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

// 2. Fetch Comments (Reads from database)
export async function getComments() {
  try {
    // Grab the first 100 comments from a list called "guestbook"
    const comments = await redis.lrange('guestbook', 0, 100);
    return comments;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

// 3. Add a Comment (Writes to database)
export async function addComment(formData: FormData) {
  const name = formData.get('name')?.toString() || 'Anonymous Developer';
  const message = formData.get('message')?.toString();

  // Don't save empty messages
  if (!message || message.trim() === '') return;

  // Structure the data
  const newComment = {
    id: crypto.randomUUID(),
    name: name,
    message: message,
    timestamp: new Date().toISOString(),
  };

  try {
    // Push the new comment to the top of the "guestbook" list
    await redis.lpush('guestbook', newComment);
    
    // Tell Next.js to refresh the homepage so the comment shows up instantly!
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to save comment:', error);
  }
}