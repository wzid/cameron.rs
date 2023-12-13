<script>
    import Icon from '@iconify/svelte';

    let projects = [
        {
            name: 'lucpc.org',
            href: 'https://lucpc.org',
            desc: 'Website for Liberty University\'s Competitive Programming Club',
            github: false,
        },
        { 
            name: 'sudoku-solver', 
            href: 'https://github.com/wzid/sudoku-solver',
            desc: 'Sudoku Solver using bitmasks and bit-manipulation',
            github: true,
        },
        {
            name: 'monkey-rs',
            href: 'https://github.com/wzid/monkey-rs',
            desc: 'Interpreter for the Monkey programming language written in Rust',
            github: true,
        },
        {
            name: 'cameron.rs',
            href: 'https://github.com/wzid/cameron.rs',
            desc: 'My personal website built with SvelteKit and TailwindCSS',
            github: true,
        },
        {
            name: 'vscode-to-vs',
            href: 'https://github.com/wzid/vscode-to-vs',
            desc: 'CLI tool to create Visual Studio projects from VSCode workspaces',
            github: true,
        },
        {
            name: 'submission-bot',
            href: 'https://github.com/lucpc-org/submission-bot',
            desc: 'Discord bot to upload code to GitHub from messages and post forum boards',
            github: true,
        },
    ]
</script>

<div class="pb-6">
    <h1 class="text-4xl sm:text-5xl my-0">Hi, I'm Cameron 🚀</h1>
    <p class="text-lg text-neutral-500">software engineer, designer, and student</p>
</div>

<div class="text-xl space-y-12">
    <div class="space-y-6">
        <p>
            I do all sorts of programming in my free time. You are currently looking at my website that I built with <b>SvelteKit</b> and <b>TailwindCSS</b>.
            I'm well versed with other programming languages such as C++, Java, Python, and Rust.
        </p>
        <p>
            I serve as <b>President</b> of Liberty University's <a class="link" href="https://lucpc.org">Competitive Programming Club</a>.
        </p>
        <p>
            As a follower of Christ, I strive to <bi>glorify God</bi> in all that I do, including software development. I hope to create <bi>meaningful software</bi> that impacts others in a positive way. 
        </p>
        <p>
            Working towards that goal, I am currently pursuing a <b>B.S. in Computer Science</b> at <a class="link" href="https://www.liberty.edu/">Liberty University</a>.
        </p>
        <p>
            I am deeply passionate about the intersection of computer science and mathematics. My interests span all the way from front-end development to number theory, and I thrive on solving challenges in algorithms and data structures.
        </p>
        <p>
            Oh, and, I write blog posts sometimes. Feel free to <a class="link" href="/blog">read them</a>. One of my posts was featured on a <a class="link" href="https://www.youtube.com/watch?v=8D7FZoQ-z20">YouTube video</a>!
        </p>
    </div>
    <div>
        <h2 class="mb-6">My notable projects:</h2>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
            {#each projects as project }
                <a href={project.href} class="flex flex-col justify-between p-6 rounded-lg bg-neutral-800 transition-all hover:bg-[#333333] shadow-md">
                    <div class="flex flex-col gap-y-2">
                        <h3 class="font-bold text-xl text-neutral-200">
                            {project.name}
                        </h3>
                        <p class="text-base leading-snug text-neutral-400">
                            {project.desc}
                        </p>
                    </div>
                    {#if project.github}
                        <Icon icon="mdi:github" width="18" height="18" class="self-end block mt-4 text-neutral-400" />
                    {:else}
                        <Icon icon="prime:arrow-up-right" width="18" height="18" class="self-end block mt-4 text-neutral-400" />
                {/if}
                </a>
            {/each}
        </div>
    </div>

</div>