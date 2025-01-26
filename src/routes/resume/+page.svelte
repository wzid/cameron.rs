<svelte:head>
    <title>resume</title>
    <meta
        name="description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
    <meta name="og:title" content="Cameron Kauffman - Resume" />
    <meta
        name="og:description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs" />
    <meta name="og:site_name" content="cameron.rs" />
    <meta name="twitter:title" content="Cameron Kauffman - Resume" />
    <meta
        name="twitter:description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
</svelte:head>

<div class="mt-4 space-y-3 text-neutral-700 sm:text-lg dark:text-neutral-300">
    <div class="resume-section">
        <h2>Education</h2>
        <div class="resume-content space-y-1">
            <div class="spread">
                <h3 class="resume-heading">Liberty University</h3>
                <p>Lynchburg, VA</p>
            </div>
            <div class="spread">
                <i class="leading-tight">
                    Bachelor of Science in Computer Science<br />
                    Minor in Mathematics
                </i>
                <i class="text-end">Aug. 2022 - May 2026</i>
            </div>
            <p>GPA: <b>3.7</b></p>
        </div>
    </div>
    <div class="resume-section">
        <h2>Technical Skills</h2>
        <div class="resume-content space-y-1">
            <p>
                <b>Languages: </b> C++, Java, JavaScript, Python, Rust, C, Go, HTML, CSS
            </p>
            <p>
                <b>Developer Tools: </b> Git, Linux, VS Code, Visual Studio, Gradle, Maven, Cargo, CMake, Bash, NPM, MacOS
            </p>
            <p>
                <b>Mathematical Proficiency: </b> Calculus, Number Theory, Discrete Mathematics
            </p>
            <p>
                <b>Awards: </b> Dean's List, Placed 12th in the Mid-Atlantic Region of the International Collegiate Programming
                Competition
            </p>
        </div>
    </div>
    <div class="resume-section">
        <h2>Experience</h2>
        <div class="resume-content space-y-5">
            <div class="space-y-1">
                <div class="spread">
                    <h3 class="resume-heading">Club President</h3>
                    <p class="text-end">May 2023 - Present</p>
                </div>
                <div class="spread">
                    <i>Competitive Programming Club</i>
                    <i>Lynchburg, VA</i>
                </div>
                <ul class="list-inside list-disc pl-3 pt-1">
                    <li>
                        Prepared weekly presentations on advanced data structures and algorithms to over 40 club members
                    </li>
                    <li>Taught on advanced C++ and Python concepts relevant to Competitive Programming</li>
                    <li>Managed over $3,000 worth of club assets</li>
                    <li>
                        Initiated Liberty University's first individual programming competition hosted at the university
                    </li>
                    <li>
                        Planned and hosted tryouts for 11 programming teams to determine which teams would represent us
                        at the ICPC
                    </li>
                    <li>Managed 4 club officers and delegated duties for the club to run smoothly</li>
                </ul>
            </div>
            <div class="space-y-1">
                <div class="spread">
                    <b class="text-xl">Java Engineering Intern</b>
                    <p class="text-end">May 2023 - Aug 2023</p>
                </div>
                <div class="spread">
                    <i>IPConfigure Inc.</i>
                    <i>Norfolk, VA</i>
                </div>
                <ul class="list-inside list-disc pl-3 pt-1">
                    <li>Produced over 2000 lines of production level code</li>
                    <li>Extended the product API to include multiple new endpoints for data accessibility</li>
                    <li>
                        Worked with 5 developers on the Java team to bring forth a new release with over <b
                            >300 quality assurance tests</b
                        >
                    </li>
                    <li>
                        Wrote over <b>80 unit tests</b> to ensure code stability and long term support
                    </li>
                    <li>
                        Demonstrated exceptional programming knowledge and debugging skills when encountering problems
                    </li>
                    <li>Documented new API endpoints for presentation at team meetings for collaborative feedback</li>
                </ul>
            </div>
            <div class="space-y-1">
                <div class="spread">
                    <b class="text-xl">Full Stack Developer</b>
                    <p class="text-end">July 2023 - September 2023</p>
                </div>
                <div class="spread">
                    <i>Pypup Inc.</i>
                    <i class="text-end">pypup.com</i>
                </div>
                <ul class="list-inside list-disc pl-3 pt-1">
                    <li>Redesigned the front-end of the website using Angular and Tailwind CSS</li>
                    <li>Aided in the addition of the Rust language for code submission</li>
                    <li>
                        Contributed over 30 problems and provided valuable feedback about discrepancies in the website
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="resume-section">
        <h2>Projects</h2>
        <div class="resume-content space-y-4">
            <div class="space-y-1">
                <div class="spread">
                    <p>
                        <b class="text-lg">Programming Club Website - lucpc.org</b><br />
                        <i>Next.js, Tailwind CSS, Google Firebase</i>
                    </p>
                    <p class="text-end">May 2023</p>
                </div>
                <ul class="list-inside list-disc pl-3 pt-1">
                    <li>
                        Club members are able to compete against one another through our competition page where we
                        upload weekly problems
                    </li>
                    <li>
                        Utilized the <b>Firebase Real-Time Database</b> to store user data and seamlessly implement statistics
                        for each user
                    </li>
                    <li>Added enhanced security to block evil actors from performing unauthorized use</li>
                </ul>
            </div>
            <div class="space-y-1">
                <div class="spread">
                    <p>
                        <b class="text-lg">Sudoku Solver </b> | <i>Rust</i>
                    </p>
                    <p class="text-end">March 2023</p>
                </div>
                <ul class="list-inside list-disc pl-3 pt-1">
                    <li>Developed a program to solve sudoku puzzles with a brute force algorithm</li>
                    <li>
                        Optimized the algorithm's performance to use the least amount of memory possible through the use
                        of bit manipulation
                    </li>
                    <li>
                        Integrated the solver with a <b>GUI</b> and compiled it to my website using <b>Web Assembly</b>
                    </li>
                </ul>
            </div>
            <div class="space-y-1">
                <div class="spread">
                    <p>
                        <b class="text-lg">Language Interpreter </b> |
                        <i>Rust</i>
                    </p>
                    <p class="text-end">June 2023</p>
                </div>
                <ul class="list-inside list-disc pl-3 pt-1">
                    <li>Developed an tree-walking interpreter for a programming language</li>
                    <li>
                        Added functionality to support conditionals, implicit and explicit returns, recursive functions,
                        closures, and a standard library
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .resume-section h2 {
        @apply border-b-[1px] font-serif text-2xl text-black dark:text-white;
    }
    .resume-section .resume-content {
        @apply py-3 sm:px-4;
    }
    .resume-heading {
        @apply font-serif text-xl font-bold text-black dark:text-white;
    }

    .spread {
        @apply flex items-center justify-between font-serif text-black dark:text-white;
    }

    i {
        @apply font-serif text-[105%] leading-[100%] text-neutral-800 dark:text-[#D4D4D4];
    }
</style>
