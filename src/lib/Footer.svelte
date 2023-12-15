<script lang="ts">
    import Icon from '@iconify/svelte';
    const icon_size = 24;
</script>

<div class="mt-20 mb-8">
    <div class="flex flex-col gap-6 items-center justify-center">
        <div class="flex gap-6 text-black dark:text-white">
            <a href="https://github.com/wzid" target="_blank">
                <Icon icon="mdi:github" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
            </a>
            <a href="https://x.com/cameronkffn" target="_blank">
                <Icon icon="simple-icons:x" width={icon_size-4} height={icon_size} class="transition-all hover:brightness-[.80]" />
            </a>
            <a href="mailto:me@cameron.rs" target="_blank">
                <Icon icon="mdi:email" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
            </a>
            <a href="https://linkedin.com/in/cameronkffn" target="_blank">
                <Icon icon="devicon:linkedin" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
            </a>
        </div>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
            cameron © 2023
        </p>
    </div>
</div>