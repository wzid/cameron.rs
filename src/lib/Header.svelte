<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "blog", href: "/blog" },
    { name: "linkedin", href: "https://linkedin.com/in/cameronkffn", external: true },
  ];

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
  class="sticky top-0 z-50 bg-background backdrop-blur-2xl backdrop-saturate-[3] supports-[backdrop-filter]:bg-background/60"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <div class="layout-md py-1 flex justify-between items-center border-b border-neutral-300 dark:border-neutral-700">
    <bi
      class="my-2 text-xl sm:text-2xl font-bold text-black hover:text-black/60 dark:text-white hover:dark:text-white/60"
    >
      <a href="/">cameron.rs</a>
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
        <!-- Insane workaround just to make the linkedin one open in a new tab -->
        {#if link.external}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="hover:dark:text-neutral-100 hover:text-neutral-900 transition-colors"
            class:dark:text-white={$page.url.pathname.split("/")[1] === link.href.slice(1)}
            class:text-black={$page.url.pathname.split("/")[1] === link.href.slice(1)}
          >
            {link.name}
          </a>
        {:else}
          <a
            href={link.href}
            class="hover:dark:text-neutral-100 hover:text-neutral-900 transition-colors"
            class:dark:text-white={$page.url.pathname.split("/")[1] === link.href.slice(1)}
            class:text-black={$page.url.pathname.split("/")[1] === link.href.slice(1)}
          >
            {link.name}
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</header>
