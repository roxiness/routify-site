import App from './App.svelte';
import HMR from '@sveltech/routify/hmr'
import './utils.css'

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;
