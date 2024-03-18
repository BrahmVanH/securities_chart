import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import dotenv from 'dotenv';
dotenv.config();

const manifestForPlugIn: VitePWAOptions = {
	includeManifestIcons: true,
	injectRegister: 'auto',
	minify: true,
	workbox: {},
	injectManifest: {},
	disable: false,
	registerType: 'prompt',
	includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
	manifest: {
		name: 'journal-logger-app',
		short_name: 'journal-logger-app',
		description: 'App that your daily journal entries, uploaded as markdown, and accepts ratings for various personal securities',
		icons: [
			{
				src: '/collie-stencil-image.svg',
				sizes: '192x192',
				type: 'image/x-icon',
				purpose: 'favicon',
			},
			{
				src: '//collie-stencil.ico',
				sizes: '512x512',
				type: 'image/x-icon',
				purpose: 'favicon',
			},
			{
				src: '//collie-stencil.ico',
				sizes: '180x180',
				type: 'image/x-icon',
				purpose: 'apple touch icon',
			},
			{
				src: '/collie-stencil.ico',
				sizes: '512x512',
				type: 'image/x-icon',
				purpose: 'any maskable',
			},
		],
		theme_color: '#171717',
		background_color: '#f0e7db',
		display: 'standalone',
		scope: '/',
		start_url: '/',
		orientation: 'portrait',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePWA(manifestForPlugIn)],
	server: {
		proxy: {
			'/graphql': {
				target: process.env.LAMBDA_GRAPHQL_URI,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/graphql/, ''),
			},
		},
	},
});
