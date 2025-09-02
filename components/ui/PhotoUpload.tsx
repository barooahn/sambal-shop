"use client";
/* eslint-disable @next/next/no-img-element */
import SafeImage from "@/components/optimization/SafeImage";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/simple-button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/simple-label";
import { Upload, X, Image as ImageIcon, Loader2 } from "@/components/ui/icons";
import { toast } from "sonner";

interface PhotoUploadProps {
	onUpload: (urls: string[]) => void;
	maxFiles?: number;
	maxSizeMB?: number;
	folder?: string;
	className?: string;
}

interface UploadingFile {
	file: File;
	preview: string;
	uploading: boolean;
	uploaded: boolean;
	url?: string;
	error?: string;
}

export function PhotoUpload({
	onUpload,
	maxFiles = 4,
	maxSizeMB = 5,
	folder = "uploads",
	className = "",
}: PhotoUploadProps) {
	const [files, setFiles] = useState<UploadingFile[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const validateFile = (file: File): { valid: boolean; error?: string } => {
		const maxSize = maxSizeMB * 1024 * 1024;
		const allowedTypes = [
			"image/jpeg",
			"image/jpg",
			"image/png",
			"image/webp",
		];

		if (file.size > maxSize) {
			return {
				valid: false,
				error: `File size must be less than ${maxSizeMB}MB`,
			};
		}

		if (!allowedTypes.includes(file.type)) {
			return {
				valid: false,
				error: "Only JPEG, PNG, and WebP images are allowed",
			};
		}

		return { valid: true };
	};

	const handleFileSelect = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const selectedFiles = Array.from(event.target.files || []);

		if (files.length + selectedFiles.length > maxFiles) {
			toast.error(`Maximum ${maxFiles} files allowed`);
			return;
		}

		// Validate and create upload objects
		const validFiles: UploadingFile[] = [];

		for (const file of selectedFiles) {
			const validation = validateFile(file);
			if (!validation.valid) {
				toast.error(`${file.name}: ${validation.error}`);
				continue;
			}

			validFiles.push({
				file,
				preview: URL.createObjectURL(file),
				uploading: false,
				uploaded: false,
			});
		}

		if (validFiles.length === 0) return;

		// Add to state
		setFiles((prev) => [...prev, ...validFiles]);

		// Start uploading
		await uploadFiles(validFiles);

		// Clear input
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const uploadFiles = async (filesToUpload: UploadingFile[]) => {
		const uploadedUrls: string[] = [];

		for (let i = 0; i < filesToUpload.length; i++) {
			const fileObj = filesToUpload[i];

			// Mark as uploading
			setFiles((prev) =>
				prev.map((f) =>
					f.file === fileObj.file ? { ...f, uploading: true } : f
				)
			);

			try {
				const formData = new FormData();
				formData.append("file", fileObj.file);
				formData.append("folder", folder);

				const response = await fetch("/api/upload", {
					method: "POST",
					body: formData,
				});

				if (!response.ok) {
					throw new Error("Upload failed");
				}

				const result = await response.json();

				if (result.success) {
					// Mark as uploaded
					setFiles((prev) =>
						prev.map((f) =>
							f.file === fileObj.file
								? {
										...f,
										uploading: false,
										uploaded: true,
										url: result.url,
								  }
								: f
						)
					);
					uploadedUrls.push(result.url);
				} else {
					throw new Error(result.message || "Upload failed");
				}
			} catch (error) {
				const errorMessage =
					error instanceof Error
						? error.message
						: "Upload failed";

				// Mark as error
				setFiles((prev) =>
					prev.map((f) =>
						f.file === fileObj.file
							? {
									...f,
									uploading: false,
									error: errorMessage,
							  }
							: f
					)
				);

				toast.error(
					`Failed to upload ${fileObj.file.name}: ${errorMessage}`
				);
			}
		}

		// Notify parent of successful uploads
		if (uploadedUrls.length > 0) {
			const allUploadedUrls = files
				.filter((f) => f.uploaded && f.url)
				.map((f) => f.url!)
				.concat(uploadedUrls);

			onUpload(allUploadedUrls);
		}
	};

	const removeFile = (index: number) => {
		const fileToRemove = files[index];

		// Clean up object URL
		URL.revokeObjectURL(fileToRemove.preview);

		// Remove from state
		setFiles((prev) => prev.filter((_, i) => i !== index));

		// Update parent with remaining uploaded URLs
		const remainingUrls = files
			.filter((f, i) => i !== index && f.uploaded && f.url)
			.map((f) => f.url!);

		onUpload(remainingUrls);
	};

	const getStatusIcon = (file: UploadingFile) => {
		if (file.uploading) {
			return (
				<Loader2 className='w-4 h-4 animate-spin text-blue-500' />
			);
		}
		if (file.uploaded) {
			return <div className='w-4 h-4 rounded-full bg-green-500' />;
		}
		if (file.error) {
			return <div className='w-4 h-4 rounded-full bg-red-500' />;
		}
		return <ImageIcon className='w-4 h-4 text-gray-500' />;
	};

	return (
		<div className={`space-y-4 ${className}`}>
			{/* Upload Area */}
			{files.length < maxFiles && (
				<Card className='border-2 border-dashed border-burgundy-300 hover:border-burgundy-400 transition-colors'>
					<div className='p-6 text-center'>
						<input
							ref={fileInputRef}
							type='file'
							accept='image/*'
							multiple
							onChange={handleFileSelect}
							className='hidden'
							id='photo-upload'
						/>
						<Label
							htmlFor='photo-upload'
							className='cursor-pointer flex flex-col items-center space-y-3'
						>
							<Upload className='w-8 h-8 text-burgundy-600' />
							<div>
								<span className='text-burgundy-700 font-medium block'>
									Click to upload photos
								</span>
								<span className='text-sm text-gray-600'>
									Up to {maxFiles} files, max{" "}
									{maxSizeMB}MB each
								</span>
								<span className='text-xs text-gray-500 block mt-1'>
									JPEG, PNG, WebP supported
								</span>
								<div className='text-xs text-burgundy-600 mt-2 p-2 bg-burgundy-50 rounded'>
									<strong>
										Photography Tips (Tips
										Fotografi):
									</strong>{" "}
									Use natural lighting, show
									traditional Indonesian cooking
									tools (mortar & pestle), include
									colorful spices and ingredients for
									authentic Indonesian appeal
								</div>
							</div>
						</Label>
					</div>
				</Card>
			)}

			{/* File List */}
			{files.length > 0 && (
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{files.map((file, index) => (
						<Card key={index} className='overflow-hidden'>
							<div className='relative'>
								<SafeImage
									src={file.preview}
									alt={`Upload ${index + 1}`}
									className='w-full h-24 object-cover'
									width={320}
									height={96}
									priority={false}
								/>

								<img
									src={file.preview}
									alt={`Upload ${index + 1}`}
									className='w-full h-24 object-cover'
								/>

								{/* Status overlay */}
								<div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
									{getStatusIcon(file)}
								</div>

								{/* Remove button */}
								<button
									type='button'
									onClick={() => removeFile(index)}
									disabled={file.uploading}
									className='absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-full p-1 shadow-lg transition-colors'
								>
									<X className='w-3 h-3' />
								</button>
							</div>

							<div className='p-2'>
								<p className='text-xs text-gray-600 truncate'>
									{file.file.name}
								</p>
								{file.error && (
									<p className='text-xs text-red-500 mt-1'>
										{file.error}
									</p>
								)}
							</div>
						</Card>
					))}
				</div>
			)}

			{/* Summary */}
			{files.length > 0 && (
				<div className='text-sm text-gray-600'>
					{files.filter((f) => f.uploaded).length} of{" "}
					{files.length} photos uploaded
					{files.some((f) => f.uploading) && " • Uploading..."}
				</div>
			)}
		</div>
	);
}
