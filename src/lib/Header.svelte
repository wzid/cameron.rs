<script lang="ts">
    import { page } from "$app/stores";

    const links = [
        { name: "writing", href: "https://blog.cameron.rs", outside: true },
        { name: "webasm", href: "https://projects.cameron.rs", outside: true },
        { name: "resume", href: "/resume" },
    ]

    let page_title: string | null = null;
    $: {
        const link = links.find(({ href }) => href === $page.url.pathname);
        if (link) {
            page_title = link.name.charAt(0).toUpperCase() + link.name.slice(1);
        } else {
            page_title = null;
        }
    }
</script>

<header class="layout-md flex justify-between items-center" data-sveltekit-noscroll data-sveltekit-preload-code="eager">
    <h1 class="font-bold text-3xl">
        <a href="/">Cameron Kauffman</a>
        {#if page_title}
            <span class="font-light">
                <span class="text-neutral-400">—</span>
                {page_title}
            </span>
        {/if}
    </h1>
    <nav class="flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5">
        {#each links as link (link)}
            <a
                href={link.href}
                target={link.outside ? "_blank" : ""}
                class="hover:dark:text-neutral-100 hover:text-neutral-900 transition-colors"
                class:dark:text-white={$page.url.pathname === link.href}
                class:text-black={$page.url.pathname === link.href}
            >
                {link.name}
            </a>
        {/each}
    </nav>
</header>