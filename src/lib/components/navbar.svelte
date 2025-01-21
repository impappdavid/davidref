<script>
    import ModeToggle from "./mode-toggle.svelte";
    import { Button } from "$lib/components/ui/button";
    import {Github} from "lucide-svelte";
    import Search from "./search.svelte";
    import * as Sheet from "$lib/components/ui/sheet";

    import { page } from '$app/stores';
</script>

<div class="w-full border-b flex justify-center sticky top-0 backdrop-blur-lg bg-zinc-100/90 dark:bg-zinc-950/90">
    <div class="w-full py-2 px-4 max-w-screen-xl flex gap-6 justify-between">
        <div class="w-full flex gap-6 items-center sm:flex hidden">
            <div class="text-lg font-sans font-bold">david/ref</div>
            <div class="flex gap-4">
                <a href="#" class="text-black dark:text-white  text-md font-sans">Docs</a>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
                </Sheet.Trigger>
                <Sheet.Content side="left">
                  <Sheet.Header class="flex text-left">
                    <div class="flex flex-col gap-3">
                        <div class="text-lg font-bold">Basics</div>
                        <div class="flex flex-col gap-2">
                            <a 
                                href="./comments" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('comments') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Comments</a>
                            <a 
                                href="./variables" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('variables') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Variables</a>
                            <a 
                                href="./operators" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('operators') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Operators</a>
                            <a 
                                href="./datatypes" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('datatypes') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Data types</a>
                            <a 
                                href="./functions" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('functions') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Functions</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="text-lg font-bold">Objects</div>
                        <div class="flex flex-col gap-2">
                            <a 
                                href="./objects" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('objects') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Objects</a>
                            <a 
                                href="./objectproperties" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('objectproperties') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Object Properties</a>
                            <a 
                                href="./objectmethods" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('objectmethods') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Object Methods</a>
                            <a 
                                href="./objectconstructors" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('objectconstructors') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Object Constructors</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="text-lg font-bold">Strings</div>
                        <div class="flex flex-col gap-2">
                            <a 
                                href="./strings" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('strings') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >Strings</a>
                            <a 
                                href="./stringmethods" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('stringmethods') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >String Methods</a>
                            <a 
                                href="./stringsearch" 
                                class="text-md hover:underline {$page.url.pathname.endsWith('stringsearch') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
                            >String Search</a>
                           
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
