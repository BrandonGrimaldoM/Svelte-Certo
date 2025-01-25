<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	let { children } = $props();
</script>

<Nav />

<main>
	{@render children()}
</main>

<Footer />
