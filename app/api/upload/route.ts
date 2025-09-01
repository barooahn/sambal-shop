import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/rate-limiter';
import { uploadFile, validateImageFile } from '@/lib/file-upload';

async function handlePOST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'uploads';

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate the file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
    }

    // Upload to Supabase Storage
    const result = await uploadFile(file, {
      bucket: 'recipe-photos',
      folder: folder
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: result.url,
      path: result.path
    });

  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed' },
      { status: 500 }
    );
  }
}

export const POST = withRateLimit(handlePOST, 'upload');