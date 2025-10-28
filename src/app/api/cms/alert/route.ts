import { NextRequest, NextResponse } from 'next/server';
import { getAlertSettings, saveAlertSettings } from '@/lib/data-loader';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// GET /api/cms/alert - Get alert settings
export async function GET() {
  try {
    console.log('🔍 API: Fetching alert settings...');
    const settings = await getAlertSettings();
    console.log('📊 API: Retrieved settings:', settings);
    return NextResponse.json(settings);
  } catch (error) {
    console.error('❌ API: Error fetching alert settings:', error);
    // Fallback to default settings
    const fallbackSettings = {
      isVisible: true,
      text: 'Aktuell: Dr. Schuster-Meinel ist nun Fachärztin in Zschorlau | Neue Kindersprechstunde | Neuaufnahmen möglich',
      lastUpdated: new Date().toISOString()
    };
    console.log('🔄 API: Using fallback settings:', fallbackSettings);
    return NextResponse.json(fallbackSettings);
  }
}

// POST /api/cms/alert - Update alert settings
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { isVisible, text } = body;
    
    console.log('💾 API: Updating alert settings:', { isVisible, text });
    
    // Save to JSON file
    await saveAlertSettings({
      isVisible,
      text,
      lastUpdated: new Date().toISOString()
    });
    
    console.log('✅ API: Successfully updated alert settings');
    
    // Trigger rebuild process
    try {
      console.log('🔄 API: Triggering rebuild process...');
      await execAsync('npm run build');
      console.log('✅ API: Rebuild completed successfully');
    } catch (rebuildError) {
      console.error('❌ API: Rebuild failed:', rebuildError);
      // Don't fail the request if rebuild fails - settings are still saved
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ API: Error updating alert settings:', error);
    return NextResponse.json(
      { error: 'Failed to update alert settings' },
      { status: 500 }
    );
  }
}
