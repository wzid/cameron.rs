<script lang="ts">
    interface Props {
        title: string;
        desc: string;
        keywords: string;
        slug?: string;
        author?: string;
    }

    let { title, desc, keywords, slug, author }: Props = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta name="keywords" content={keywords} />
    {#if author}
        <meta name="author" content={author} />
    {/if}
    <meta name="og:title" content={title} />
    <meta name="og:description" content={desc} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs/{slug ?? ""}" />
    <meta name="og:site_name" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="theme-color" content="#00bc7d" />
</svelte:head>