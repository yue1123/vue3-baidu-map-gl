/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
	plugins: [Vue(), VueJsx()],
	test: {
		globals: true,
		environment: 'jsdom',
		transformMode: {
			web: [/\.[jt]sx$/]
		}
	}
})
