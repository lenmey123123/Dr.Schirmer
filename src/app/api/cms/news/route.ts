import { NextRequest, NextResponse } from 'next/server';
import { getAllNewsPosts, getNewsPosts, saveNewsPost, deleteNewsPost } from '@/lib/data-loader';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// GET /api/cms/news - Get all news posts (including unpublished)
export async function GET() {
  try {
    console.log('🔍 API: Fetching news posts...');
    const posts = await getAllNewsPosts();
    console.log('📊 API: Retrieved posts:', posts.length);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('❌ API: Error fetching news posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news posts' },
      { status: 500 }
    );
  }
}

// POST /api/cms/news - Create or update news post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description, date, icon, color, published } = body;
    
    console.log('💾 API: Saving news post:', { id, title });
    
    // Save to JSON file
    await saveNewsPost({
      id: id || Date.now().toString(),
      title,
      description,
      date,
      icon,
      color,
      published: published || false
    });
    
    console.log('✅ API: Successfully saved news post');
    
    // Trigger rebuild process
    try {
      console.log('🔄 API: Triggering rebuild process...');
      await execAsync('npm run build');
      console.log('✅ API: Rebuild completed successfully');
    } catch (rebuildError) {
      console.error('❌ API: Rebuild failed:', rebuildError);
      // Don't fail the request if rebuild fails - post is still saved
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ API: Error saving news post:', error);
    return NextResponse.json(
      { error: 'Failed to save news post' },
      { status: 500 }
    );
  }
}

// DELETE /api/cms/news - Delete news post
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }
    
    console.log('🗑️ API: Deleting news post:', id);
    
    // Delete from JSON file
    await deleteNewsPost(id);
    
    console.log('✅ API: Successfully deleted news post');
    
    // Trigger rebuild process
    try {
      console.log('🔄 API: Triggering rebuild process...');
      await execAsync('npm run build');
      console.log('✅ API: Rebuild completed successfully');
    } catch (rebuildError) {
      console.error('❌ API: Rebuild failed:', rebuildError);
      // Don't fail the request if rebuild fails - post is still deleted
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ API: Error deleting news post:', error);
    return NextResponse.json(
      { error: 'Failed to delete news post' },
      { status: 500 }
    );
  }
}