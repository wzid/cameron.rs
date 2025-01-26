<script>
    let { title, desc, keywords } = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta name="keywords" content={keywords} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={desc} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs" />
    <meta name="og:site_name" content="cameron.rs" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="theme-color" content="#00bc7d" />
</svelte:head>