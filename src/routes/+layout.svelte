<script lang="ts">
    import "@fontsource/newsreader";
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../app.css";
</script>

<Header />

<main>
    <slot />
</main>

<Footer />