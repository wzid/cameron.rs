<script lang="ts">
  import Icon from "@iconify/svelte";
  import { timeAgo } from "$lib/utils";
  import type { Post } from "$types";
  import Meta from "$lib/Meta.svelte";
  let { data }: { data: { post: Post } } = $props();

  let post_time = timeAgo(data.post.meta.date);

  let projects = [
    {
      name: "phi",
      href: "https://github.com/wzid/phi",
      desc: "An LLVM enabled compiler written in C",
      tool_icons: ["devicon-plain:c", "devicon-plain:llvm"],
      github: true
    },
    {
      name: "scheduleit.now",
      href: "https://scheduleit.now",
      desc: " A web app built to make finding the best time to meet with your friends or team members easier.",
      tool_icons: ["ri:svelte-fill", "devicon-plain:typescript", "mdi:tailwind"],
      github: false,
    },
    {
      name: "mini-keynote",
      href: "https://github.com/wzid/mini-keynote",
      desc: " A tool to present slides based on a text file. Designed to be simple with few features.",
      tool_icons: ["akar-icons:python-fill"],
      github: true,
    },
    {
      name: "multithreaded-blur",
      href: "https://github.com/wzid/multithreaded-blur",
      desc: "Multithreaded implementation of a Gaussian blur that processes BMP images in parallel segments ",
      tool_icons: ["simple-icons:cplusplus"],
      github: true,
    },
    {
      name: "sudoku-solver",
      href: "https://github.com/wzid/sudoku-solver",
      desc: "Sudoku Solver using bitmasks and bit-manipulation",
      tool_icons: ["simple-icons:rust", "wasm"],
      github: true,
    },
    {
      name: "lucpc.org",
      href: "https://lucpc.org",
      desc: "Website for Liberty University's Competitive Programming Club",
      tool_icons: ["akar-icons:nextjs-fill", "devicon-plain:javascript", "mdi:tailwind"],
      github: false,
    },
    {
      name: "monkey-rs",
      href: "https://github.com/wzid/monkey-rs",
      desc: "Interpreter for the Monkey programming language written in Rust",
      tool_icons: ["simple-icons:rust"],
      github: true,
    },
    {
      name: "cameron.rs",
      href: "https://github.com/wzid/cameron.rs",
      desc: "My personal website built with Svelte and TailwindCSS",
      tool_icons: ["ri:svelte-fill", "devicon-plain:javascript", "mdi:tailwind"],
      github: true,
    },
    {
      name: "vscode-to-vs",
      href: "https://github.com/wzid/vscode-to-vs",
      desc: "CLI tool to create Visual Studio projects from VSCode workspaces",
      tool_icons: ["simple-icons:rust"],
      github: true,
    },
  ];
</script>


<Meta
  title="cameron.rs"
  desc="My personal website where you can learn about me and view some stuff that I've written"
  keywords="cameron, compilers, python, software engineering, liberty, university, rust, liberty university"
/>

<div class="pb-8 font-mono">
  <h1 class="my-0! text-4xl! sm:text-5xl! tracking-tight">cameron<span class="text-emerald-400">.rs</span></h1>
  <p class="text-base text-neutral-500 mt-1">// follower of Christ · software engineer · student</p>
</div>

<div class="space-y-12 text-xl">
  <!-- prettier-ignore -->
  <div class="space-y-6">
    <p>
      I do a lot of programming with various different tools. I'm well versed with programming languages such as C, C++, Python, JavaScript, Rust, and more.
    </p>
    <p>
      As a follower of Christ, I strive to glorify God in all that I do - including software development. I want to
      create meaningful software that impacts others in a positive way.
    </p>
    <p>I will be working @ <b><a class="link" href="https://www.oracle.com">Oracle</a></b> as a software engineer in July 2026.</p>
    <p>
      I also write blog posts sometimes. Feel free to <a class="link" href="/blog">read them</a>. One of my posts was
      featured on a <a class="link" href="https://www.youtube.com/watch?v=8D7FZoQ-z20">YouTube video</a> with over
      <b>500k</b> views!
    </p>
  </div>
  <div class="w-full">
    <h2 class="mb-6!">Most recent from the blog</h2>
    <a
      href="blog/{data.post.postSlug}"
      class="flex flex-col group p-5 rounded-xl border shadow-none transition-all duration-300 ease-out border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
    >
      <div>
        <div class="flex items-center justify-between">
          <h3 class="leading-none font-bold text-neutral-200">
            {data.post.meta.title}
          </h3>
          <Icon icon="prime:arrow-up-right" width="18" height="18" class="block text-emerald-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <div>
          <p class="inline text-base">{post_time}</p>
          <div class="flex flex-wrap gap-2 py-1">
            {#each data.post.meta.tags as tag}
              <span
                class="rounded-full px-2.5 py-0.5 text-sm transition-all duration-300 bg-neutral-700/50 text-neutral-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400"
                >#{tag}</span
              >
            {/each}
          </div>
        </div>
      </div>
      <p class="text-base">{data.post.meta.desc}</p>
    </a>
  </div>
  <div>
    <h2 class="mb-6!">Notable projects</h2>
    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
      {#each projects as project}
        <a
          target="_blank"
          href={project.href}
          class="group/card flex flex-col justify-between rounded-xl border p-5 shadow-none transition-all duration-300 ease-out border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="flex flex-col gap-y-2">
            <h3 class="text-xl font-bold text-neutral-200 group-hover/card:text-white transition-colors duration-300">
              {project.name}
            </h3>
            <p class="text-base leading-snug text-neutral-400">
              {project.desc}
            </p>
          </div>
          <div class="flex flex-row-reverse justify-between">
            {#if project.github}
              <Icon icon="mdi:github" width="18" height="18" class="mt-4 block text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-300" />
            {:else}
              <Icon icon="prime:arrow-up-right" width="18" height="18" class="mt-4 block text-neutral-500 transition-all duration-300 group-hover/card:text-emerald-400 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
            {/if}
            <div class="flex gap-2">
              {#each project.tool_icons as icon}
                {#if icon == "wasm"}
                  <div class="mt-4 block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 128 128">
                      <path
                        fill="#a3a3a3"
                        d="M.223.222v127.555h127.555V.222H78.594c.014.227.036.455.036.686c0 8.08-6.55 14.626-14.63 14.626c-8.078 0-14.625-6.546-14.625-14.626c0-.231.022-.459.031-.686zm29.595 68.746h8.445l5.782 30.738h.107l6.968-30.738h7.908l6.265 31.119h.106l6.597-31.119h8.284l-10.765 45.156H61.12l-6.213-30.738H54.8l-6.7 30.738h-8.557zm59.994 0h13.334l13.284 45.156h-8.77l-2.879-10.051H89.59l-2.212 10.05h-8.5ZM94.895 80.1l-3.684 16.57h11.473L98.448 80.1Z"
                      />
                    </svg>
                  </div>
                {:else}
                  <Icon {icon} width="18" height="18" class="mt-4 block text-neutral-400" />
                {/if}
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }
</style>
