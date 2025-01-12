<script>
  export let data;
  import Icon from "@iconify/svelte";
  import { timeAgo } from "$lib/utils";

  let post_time = timeAgo(data.post.meta.date);

  let projects = [
    {
      name: "mini-keynote",
      href: "https://github.com/wzid/mini-keynote",
      desc: " A tool to present slides based on a text file. Designed to be simple with few features.",
      tool_icons: ["akar-icons:python-fill"],
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
    {
      name: "lucpc.org",
      href: "https://lucpc.org",
      desc: "Website for Liberty University's Competitive Programming Club",
      tool_icons: ["akar-icons:nextjs-fill", "devicon-plain:javascript", "mdi:tailwind"],
      github: false,
    },
  ];
</script>

<svelte:head>
  <title>cameron.rs</title>
  <meta
    name="description"
    content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
  />
  <meta name="og:title" content="Cameron Kauffman" />
  <meta
    name="og:description"
    content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
  />
  <meta name="og:type" content="website" />
  <meta name="og:url" content="https://cameron.rs" />
  <meta name="og:site_name" content="cameron.rs" />
  <meta name="twitter:title" content="Cameron Kauffman" />
  <meta
    name="twitter:description"
    content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
  />
</svelte:head>

<div class="pb-6">
  <h1 class="text-4xl sm:text-5xl my-0">Hi, I'm Cameron 🚀</h1>
  <p class="text-lg text-neutral-500">software engineer, designer, and student</p>
</div>

<div class="text-xl space-y-12">
  <div class="space-y-6">
    <p>
      I do a lot of programming with various different tools. I'm well versed with programming languages such as Java,
      C++, Python, JavaScript, and Rust.
    </p>
    <p>
      As a follower of Christ, I strive to <bi>glorify God</bi> in all that I do, including software development. I hope
      to create <bi>meaningful software</bi> that impacts others in a positive way.
    </p>
    <p>
      Working towards that goal, I am currently pursuing a <b>B.S. in Computer Science</b> at
      <a class="link" href="https://www.liberty.edu/">Liberty University</a>.
    </p>
    <div>
      <p>I am currently serving in the following roles:</p>
      <ul class="!mt-2">
        <li>
          Senator for the <a class="link" href="https://www.liberty.edu/business/">School of Business</a> in Student Government
        </li>
        <li>
          Competition Coordinator for the <a class="link" href="https://lucpc.org">Competitive Programming Club</a>
        </li>
        <li>Innovation & Development officer for the Software Engineering Club</li>
      </ul>
    </div>
    <p>
      I am super interested in embedded systems, compilers, and programming languages.
    </p>
    <p>
      I also write blog posts sometimes. Feel free to <a class="link" href="/blog">read them</a>. One of my posts
      was featured on a <a class="link" href="https://www.youtube.com/watch?v=8D7FZoQ-z20">YouTube video</a> with over
      <b>250k</b> views!
    </p>
  </div>
  <div>
    <h2 class="mb-6">Most recent from the blog</h2>
    <a href={data.post.path}>
      <div
        class="p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 transition-all shadow-none ease-out duration-200 hover:shadow-3xl hover:dark:bg-[#333333]"
      >
        <div class="pb-1">
          <div class="flex items-center justify-between">
            <h3 class="leading-none font-bold text-neutral-800 dark:text-neutral-200">
              {data.post.meta.title}
            </h3>
            <Icon icon="prime:arrow-up-right" width="18" height="18" class="block text-emerald-500" />
          </div>
          <div class="mb-1 sm:my-1">
            <p class="text-base inline">{post_time}</p>
            <div class="inline sm:ml-1 space-x-2">
              {#each data.post.meta.tags as tag}
                <a href="/blog/tag/{tag}" class="tag">#{tag}</a>
              {/each}
            </div>
          </div>
        </div>
        <p class="text-base">{data.post.meta.desc}</p>
      </div>
    </a>
  </div>
  <div>
    <h2 class="mb-6">My notable projects:</h2>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
      {#each projects as project}
        <a
          target="_blank"
          href={project.href}
          class="flex flex-col border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 justify-between p-6 rounded-lg transition-all shadow-none ease-out duration-150 hover:shadow-3xl hover:dark:bg-[#333333]"
        >
          <div class="flex flex-col gap-y-2">
            <h3 class="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              {project.name}
            </h3>
            <p class="text-base leading-snug text-neutral-600 dark:text-neutral-400">
              {project.desc}
            </p>
          </div>
          <div class="flex flex-row-reverse justify-between">
            {#if project.github}
              <Icon icon="mdi:github" width="18" height="18" class="block mt-4 text-neutral-400" />
            {:else}
              <Icon icon="prime:arrow-up-right" width="18" height="18" class="block mt-4 text-neutral-400" />
            {/if}
            <div class="flex gap-2">
              {#each project.tool_icons as icon}
                {#if icon == "wasm"}
                  <div class="block mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 128 128">
                      <path
                        fill="#a3a3a3"
                        d="M.223.222v127.555h127.555V.222H78.594c.014.227.036.455.036.686c0 8.08-6.55 14.626-14.63 14.626c-8.078 0-14.625-6.546-14.625-14.626c0-.231.022-.459.031-.686zm29.595 68.746h8.445l5.782 30.738h.107l6.968-30.738h7.908l6.265 31.119h.106l6.597-31.119h8.284l-10.765 45.156H61.12l-6.213-30.738H54.8l-6.7 30.738h-8.557zm59.994 0h13.334l13.284 45.156h-8.77l-2.879-10.051H89.59l-2.212 10.05h-8.5ZM94.895 80.1l-3.684 16.57h11.473L98.448 80.1Z"
                      />
                    </svg>
                  </div>
                {:else}
                  <Icon {icon} width="18" height="18" class="block mt-4 text-neutral-400" />
                {/if}
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  .tag {
    @apply px-2 rounded-xl text-base bg-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400;
    @apply transition-colors hover:bg-neutral-400 hover:text-neutral-700 hover:dark:bg-neutral-600 hover:dark:text-neutral-300;
  }
</style>
