<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../app.css";
</script>

<Header />

<main class="pt-12 layout-md">
    <slot />
</main>

<Footer />