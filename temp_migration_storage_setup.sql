-- Storage setup for recipe photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'recipe-photos',
    'recipe-photos',
    true,
    5242880, -- 5MB limit
    ARRAY['image/jpeg','image/jpg','image/png','image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Storage policies for recipe photos bucket
CREATE POLICY "Public access to recipe photos" ON storage.objects
FOR SELECT USING (bucket_id = 'recipe-photos');

CREATE POLICY "Authenticated users can upload recipe photos" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'recipe-photos');

CREATE POLICY "Users can update their own recipe photos" ON storage.objects
FOR UPDATE USING (bucket_id = 'recipe-photos');

CREATE POLICY "Users can delete their own recipe photos" ON storage.objects
FOR DELETE USING (bucket_id = 'recipe-photos');