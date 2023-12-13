<script>
    import { ArrowUpRight, Github } from "lucide-svelte";

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

<div class="layout-md pb-4">
    <h1 class="text-4xl my-0">Hi, I'm Cameron 🚀</h1>
    <p class="text-neutral-500">software engineer, designer, and student</p>
</div>

<div class="layout-md text-lg space-y-12">
    <div class="space-y-6">
        <p>
            I currently serve as <b>President</b> of Liberty University's <a class="link" href="https://lucpc.org">Competitive Programming Club</a>.
        </p>
        <p>
            As a follower of Christ, I strive to <bi>glorify God</bi> in all that I do, including software development. I hope to create <bi>meaningful software</bi> that impacts others in a positive way. 
        </p>
        <p>
            Working towards that goal, I am currently pursuing a <b>B.S. in Computer Science</b> at <a class="link" href="https://www.liberty.edu/">Liberty University</a>.
        </p>
        <p>
            I am deeply passionate about the intersection of computer science and mathematics. My interests span from front-end development to number theory, and I thrive on solving challenges in algorithms and data structures.
        </p>
    </div>
    <div>
        <h2 class="mb-6">My notable projects:</h2>
        <div class="grid grid-cols-3 gap-2">
            {#each projects as project }
                <a href={project.href} class="flex flex-col justify-between p-6 rounded-lg bg-neutral-800 transition-all hover:bg-[#333333] shadow-md">
                    <div class="flex flex-col gap-y-2">
                        <h3 class="font-bold text-xl text-neutral-200">
                            {project.name}
                        </h3>
                        <p class="text-sm leading-snug text-neutral-400">
                            {project.desc}
                        </p>
                    </div>
                    {#if project.github}
                        <Github size={16} class="self-end block mt-4 text-neutral-400"/>
                    {:else}
                        <ArrowUpRight size={16} class="self-end mt-4 block text-neutral-400"/>
                    {/if}
    
    
                </a>
            {/each}
        </div>
    </div>

</div>