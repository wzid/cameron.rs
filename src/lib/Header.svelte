<script lang="ts">
    import { page } from '$app/stores';
    
    const links = [
        { name: "writing", href: "/blog" },
        { name: "webasm", href: "/projects" },
        { name: "resume", href: "/resume/" },
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

<header 
    class="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
    data-sveltekit-noscroll 
    data-sveltekit-preload-code="eager"
>
    <div class="layout-md flex justify-between items-center border-b border-neutral-700">
        <bi class="my-2 text-2xl">
            <a href="/">Cameron Kauffman</a>
            {#if page_title}
                <span class="font-normal text-neutral-200">
                    <span class="text-neutral-500">—</span>
                    {page_title}
                </span>
            {/if}
        </bi>
        <nav class="flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5">
            {#each links as link (link)}
                <a
                    href={link.href}
                    class="hover:dark:text-neutral-100 hover:text-neutral-900 transition-colors"
                    class:dark:text-white={$page.url.pathname === link.href}
                    class:text-black={$page.url.pathname === link.href}
                >
                    {link.name}
                </a>
            {/each}
        </nav>

    </div>
</header>