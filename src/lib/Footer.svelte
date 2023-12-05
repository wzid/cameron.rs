<script lang="ts">
    import { Github, Twitter, Linkedin } from "lucide-svelte";  
    const icon_size = 24;  
</script>

<div class="layout-md mt-20">
    <div class="flex flex-col gap-6 items-center justify-center">
        <div class="flex gap-6">
            <a href="https://github.com/wzid" class="social-circle" target="_blank">
                <Github size={icon_size} class="text-neutral-400" />
            </a>
            <a href="https://x.com/cameronkffn" class="social-circle" target="_blank">
                <Twitter size={icon_size} class="text-neutral-400" />
            </a>
            <a href="https://linkedin.com/in/cameronkffn" class="social-circle" target="_blank">
                <Linkedin size={icon_size} class="text-neutral-400" />
            </a>
        </div>
        <p class="text-neutral-400">
            cameron - software engineer © 2023
        </p>
    </div>
</div>

<style lang="postcss">
    .social-circle {
        @apply dark:bg-neutral-700 rounded-full p-[.625rem] hover:bg-neutral-500 transition-colors;
    }
</style>