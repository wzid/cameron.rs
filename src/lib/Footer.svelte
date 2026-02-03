<script lang="ts">
  import Icon from "@iconify/svelte";
  const icon_size = 20;

  const links = [
    { href: "https://github.com/wzid", icon: "mdi:github", label: "wzid" },
    { href: "https://youtube.com/@wzid-codes", icon: "mdi:youtube", label: "wzid-codes" },
    { href: "https://linkedin.com/in/cameronkffn", icon: "mdi:linkedin", label: "cameronkffn" },
    { href: "mailto:me@cameron.rs", icon: "mdi:email", label: "Email" },
  ];
</script>

<footer class="mt-24 mb-10">
  <div class="flex flex-col items-center justify-center">
    <div class="w-fit rounded-xl px-8 py-6 backdrop-blur-sm">
      <div class="flex flex-col gap-4">
        <blockquote class="max-w-md">
          <p class="text-lg text-neutral-400 italic font-serif leading-relaxed">
            "Fear not, for I have redeemed you; I have called you by name, you are mine."
            <cite class="block text-base text-emerald-500/80 font-serif not-italic">— Isaiah 43:1</cite>
          </p>
        </blockquote>

        <!-- Social links -->
        <div class="flex flex-wrap gap-2">
          {#each links as link}
            <a
              href={link.href}
              target="_blank"
              class="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-neutral-400 
              transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
            >
              <Icon icon={link.icon} width={icon_size} height={icon_size} />
              <span class="text-sm font-medium">{link.label}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <p class="mt-6 text-sm text-neutral-500">cameron © 2023 – {new Date().getFullYear()}</p>
  </div>
</footer>
