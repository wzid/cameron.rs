<script lang="ts">
  import { page } from "$app/state";

  const links = [
    { name: "blog", href: "/blog" },
    {
      name: "linkedin",
      href: "https://linkedin.com/in/cameronkffn",
      external: true,
    },
  ];

  let page_title = $state(null);

  $effect(() => {
    const current_page_link = links.find(({ href }) => href.slice(1) === page.url.pathname.split("/")[1]);
    page_title = current_page_link 
      ? current_page_link.name.charAt(0).toUpperCase() + current_page_link.name.slice(1)
      : null;
  });
</script>

<header
  class="bg-background supports-backdrop-filter:bg-background/60 sticky top-0 z-50 backdrop-blur-2xl backdrop-saturate-3"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <div class="layout-md flex items-center justify-between border-b py-1 border-neutral-700">
    <div class="inline-flex items-center">
      <h1
        class="my-2 text-xl font-bold sm:text-2xl! text-white hover:text-white/60"
      >
        <a href="/">cameron.rs</a>
      </h1>
      {#if page_title}
        <h2 class="ml-2 text-neutral-200">
          <span class="hidden text-neutral-500 sm:inline">—</span>
          {page_title}
        </h2>
      {/if}
    </div>
    <nav class="flex items-start justify-end space-x-4 py-0.5 text-lg text-neutral-500 sm:space-x-6">
      {#each links as link (link)}
        <!-- Insane workaround just to make the linkedin one open in a new tab -->
        {#if link.external}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-neutral-100"
            class:text-white={page.url.pathname.split("/")[1] === link.href.slice(1)}
          >
            {link.name}
          </a>
        {:else}
          <a
            href={link.href}
            class="transition-colors hover:text-neutral-100"
            class:text-white={page.url.pathname.split("/")[1] === link.href.slice(1)}
          >
            {link.name}
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</header>
