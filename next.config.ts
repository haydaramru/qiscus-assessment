import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/inbox",
				permanent: true
			}
		]
	}
};

export default nextConfig;
