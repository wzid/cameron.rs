<script lang="ts">
    import { page } from '$app/stores';
    
    const links = [
        { name: "writing", href: "/blog" },
        { name: "webasm", href: "https://projects.cameron.rs" },
        { name: "resume", href: "/resume" },
    ]

    let page_title: string | null = null;
    $: {
        const link = links.find(({ href }) => href.slice(1) === $page.url.pathname.split("/")[1]);
        if (link) {
            page_title = link.name.charAt(0).toUpperCase() + link.name.slice(1);
        } else {
            page_title = null;
        }
    }
</script>

<header 
    class="sticky top-0 z-50 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60" 
    data-sveltekit-noscroll 
    data-sveltekit-preload-code="eager"
>
    <div class="layout-md py-1 flex justify-between items-center border-b border-neutral-300 dark:border-neutral-700">
        <bi class="my-2 text-xl sm:text-2xl font-livory italic font-bold text-[105%] leading-[100%] text-black dark:text-white">
            <a href="/">Cameron Kauffman</a>
            {#if page_title}
                <span class="font-normal text-neutral-800 dark:text-neutral-200">
                    <span class="text-neutral-500 hidden sm:inline">—</span>
                    <p class="sm:inline">
                        {page_title}
                    </p>
                </span>
            {/if}
        </bi>
        <nav class="flex items-start text-neutral-500 justify-end space-x-4 sm:space-x-6 text-lg py-0.5">
            {#each links as link (link)}
                <a
                    href={link.href}
                    class="hover:dark:text-neutral-100 hover:text-neutral-900 transition-colors"
                    class:dark:text-white={$page.url.pathname.split("/")[1] === link.href.slice(1)}
                    class:text-black={$page.url.pathname.split("/")[1] === link.href.slice(1)}
                >
                    {link.name}
                </a>
            {/each}
        </nav>

    </div>
</header>