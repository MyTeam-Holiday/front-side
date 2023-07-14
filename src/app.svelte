<script>
	import "../node_modules/materialize-css/dist/css/materialize.css";

	import { Router, Route } from "svelte-routing";
	import { setupI18n, isLocaleLoaded, locale, dir } from './services/i18n';
	import Header from './components/layout/header.svelte';
	import Menu from './components/layout/navMenu.svelte';
	import Footer from './components/layout/footer.svelte';
	import About from './components/pages/about.svelte';
	import Contact from './components/pages/contact.svelte';
	import FrameworkGrid from './components/frameworks/frameworkGrid.svelte';
	import LocaleSwitcher from './components/controllers/localeSwitcher.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'en' });
	}

	$: { document.dir = $dir; }
</script>

<style>
    main { padding: 0 1rem; }
</style>

{#if $isLocaleLoaded}
<Router>
    <Header />
    <div class="container">
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    </div>
</Router>
    <LocaleSwitcher
        value={$locale}
        on:locale-changed={e => setupI18n({ withLocale: e.detail }) }
    />

    <main>
        <frameworkGrid />
    </main>

    <Footer />
{:else}
    <p>Loading...</p>
{/if}