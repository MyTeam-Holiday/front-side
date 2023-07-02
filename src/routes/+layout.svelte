<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './styles.css';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
</style>
