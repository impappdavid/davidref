<script>
    import ModeToggle from "./mode-toggle.svelte";
    import { Button } from "$lib/components/ui/button";
    import { Github } from "lucide-svelte";
    import Search from "./search.svelte";
    import * as Sheet from "$lib/components/ui/sheet";

    import { page } from "$app/stores";
</script>

<div
    class="w-full border-b flex justify-center sticky top-0 backdrop-blur-lg bg-zinc-100/90 dark:bg-zinc-950/90"
>
    <div class="w-full py-2 px-4 max-w-screen-xl flex gap-6 justify-between">
        <div class="w-full flex gap-6 items-center sm:flex hidden">
            <div class="text-lg font-sans font-bold">david/ref</div>
            <div class="flex gap-4">
                <a href="#" class="text-black dark:text-white text-md font-sans"
                    >Docs</a
                >
                <a
                    href="#"
                    class="text-zinc-600 dark:text-zinc-400 text-md font-sans hover:text-black dark:hover:text-white"
                    >Examples</a
                >
            </div>
        </div>
        <div class="w-full flex gap-6 items-center sm:hidden flex">
            <Sheet.Root>
                <Sheet.Trigger class="outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="-5 -7 24 24"
                        ><path
                            fill="currentColor"
                            d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"
                        /></svg
                    >
                </Sheet.Trigger>
                <Sheet.Content side="left" class="max-w-screen-xl overflow-y-auto">
                    <Sheet.Header class="flex text-left">
                        <div class="text-2xl font-bold">david/ref</div>
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Basics</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./comments"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'comments',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Comments</a
                                    >
                                    <a
                                        href="./variables"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'variables',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Variables</a
                                    >
                                    <a
                                        href="./operators"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'operators',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Operators</a
                                    >
                                    <a
                                        href="./datatypes"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'datatypes',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Data types</a
                                    >
                                    <a
                                        href="./functions"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'functions',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Functions</a
                                    >
                                </div>
                            </div>
                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Objects</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./objects"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'objects',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Objects</a
                                    >
                                    <a
                                        href="./objectproperties"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'objectproperties',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Object Properties</a
                                    >
                                    <a
                                        href="./objectmethods"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'objectmethods',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Object Methods</a
                                    >
                                    <a
                                        href="./objectconstructors"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'objectconstructors',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Object Constructors</a
                                    >
                                </div>
                            </div>
                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Strings</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./strings"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'strings',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Strings</a
                                    >
                                    <a
                                        href="./stringmethods"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'stringmethods',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >String Methods</a
                                    >
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Numbers</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./numbers"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'numbers',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Numbers</a
                                    >
                                    <a
                                        href="./bigint"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'bigint',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >BigInt</a
                                    >
                                    <a
                                        href="./numbermethods"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'numbermethods',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Number Methods</a
                                    >
                                    <a
                                        href="./numberproperties"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'numberproperties',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Number Properties</a
                                    >
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Arrays</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./arrays"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'arrays',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Arrays</a
                                    >
                                    <a
                                        href="./arraymethods"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'arraymethods',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Array Methods</a
                                    >
                                    <a
                                        href="./arraysearch"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'arraysearch',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Array Search</a
                                    >
                                    <a
                                        href="./arraysort"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'arraysort',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Array Sort</a
                                    >
                                    <a
                                        href="./arrayiteration"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'arrayiteration',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Array Iteration</a
                                    >
                                    
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Dates</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./dates"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'dates',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Dates</a
                                    >
                                    <a
                                        href="./dateformats"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'dateformats',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Date Formats</a
                                    >
                                    <a
                                        href="./dategetmethods"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'dategetmethods',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Date Get Methods</a
                                    >
                                    <a
                                        href="./datesetmethods"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'datesetmethods',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Date Set Methods</a
                                    >
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./math"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'math',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Math</a
                                    >
                                    <a
                                        href="./random"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'random',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Random</a
                                    >
                                    <a
                                        href="./booleans"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'booleans',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Booleans</a
                                    >
                                    <a
                                        href="./comparisons"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'comparisons',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Comparisons</a
                                    >
                                    <a
                                        href="./ifelse"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'ifelse',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >If Else</a
                                    >
                                    <a
                                        href="./switch"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'switch',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >Switch</a
                                    >
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <div class="text-sm font-bold">Loops</div>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="./for"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'for',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >For</a
                                    >
                                    <a
                                        href="./forin"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'forin',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >For In</a
                                    >
                                    <a
                                        href="./forof"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'forof',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >For Of</a
                                    >
                                    <a
                                        href="./while"
                                        class="text-sm hover:underline {$page.url.pathname.endsWith(
                                            'while',
                                        )
                                            ? 'text-black dark:text-white font-medium underline'
                                            : 'text-zinc-600 dark:text-zinc-400'}"
                                        >While</a
                                    >
                                </div>
                            </div>
                        </div>
                    </Sheet.Header>
                </Sheet.Content>
            </Sheet.Root>
        </div>
        <div class="flex gap-1">
            <Search />
            <Button variant="ghost" size="icon" class="rounded-lg">
                <Github class="w-4 h-4" />
            </Button>
            <ModeToggle />
        </div>
    </div>
</div>
