<script>
    import { ArrowUpRight } from "lucide-svelte";

    let projects = [
        {
            name: 'lucpc.org',
            href: 'https://lucpc.org',
            desc: 'Website for Liberty University\'s Competitive Programming Club',
        },
        { 
            name: 'sudoku-solver', 
            href: 'https://github.com/wzid/sudoku-solver',
            desc: 'Sudoku Solver using bitmasks and bit-manipulation with Rust 🦀 and egui 🎨',
            extra: '32 stars on Github'
        },
        {
            name: 'monkey-rs',
            href: 'https://github.com/wzid/monkey-rs',
            desc: 'Interpreter for the Monkey programming language written in Rust 🦀',
        },
    ]
</script>

<p class=" layout-md text-xl text-neutral-400 mb-16">
    is a <span class="font-semibold text-black dark:text-white mono">software engineer</span>, <br />
    <span class="font-semibold text-black dark:text-white">student</span>, and <span class="font-livory font-semibold text-black dark:text-white">designer</span>.
</p>

<div class="layout-md text-lg space-y-12">
    <div class="space-y-6">
        <p>
            I currently serve as <b>President</b> of Liberty University's <a class="link" href="https://lucpc.org">Competitive Programming Club</a>.
        </p>
        <p>
            As a follower of Christ, I strive to <i>glorify God</i> in all that I do, including software development. I hope to create <i>meaningful software</i> that impacts others in a positive way. 
        </p>
        <p>
            Working towards that goal, I am currently pursuing a <b>B.S. in Computer Science</b> at <a class="link" href="https://www.liberty.edu/">Liberty University</a>.
        </p>
        <p>
            I am deeply passionate about the intersection of computer science and mathematics. My interests span from front-end development to number theory, and I thrive on solving challenges in algorithms and data structures.
        </p>
    </div>
    <div>
        <p class="text-xl mb-8">My notable projects:</p>
        {#each projects as project }
            <a class="grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:dark:bg-neutral-800 hover:bg-neutral-200 transition-colors" href={project.href}>
                <div class="flex gap-1 items-center font-medium">
                    {project.name}
                    <ArrowUpRight size={18} class="inline text-neutral-400" />
                  </div>
                  <div>
                    <p>{project.desc}</p>
                    {#if project.extra}
                      <aside>{project.extra}</aside>
                    {/if}
                  </div>
            </a>
        {/each}
    </div>

</div>