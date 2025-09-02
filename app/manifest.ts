import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Spice Island Indonesia - Authentic Indonesian Sambal",
		short_name: "Spice Island",
		description:
			"Premium authentic Indonesian sambal from traditional Spice Islands recipes",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#dc2626",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
