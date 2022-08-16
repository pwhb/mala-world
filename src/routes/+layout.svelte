<!-- <script context="module">

</script> -->
<script>
	import '../app.css';
	// @ts-ignore
	import Navbar from '$lib/components/Navbar.svelte';
	// @ts-ignore
	import Footer from '$lib/components/Footer.svelte';

	export /**
	 * @type {any}
	 */
	let data;
	const { layout } = data.props;
	console.log('layout', layout);
</script>

<Navbar title={layout.title} />
<slot />
<Footer icon={layout.footerIcon} />
