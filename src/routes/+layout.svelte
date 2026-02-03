<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<Header />

<main class="layout-md pt-8">
  {@render children?.()}
</main>

<Footer />
