<script>
    import ModeToggle from "./mode-toggle.svelte";
    import { Button } from "$lib/components/ui/button";
    import {Github} from "lucide-svelte";
    import Search from "./search.svelte";
</script>

<div class="w-full border-b flex justify-center sticky top-0 backdrop-blur-lg bg-zinc-100/90 dark:bg-zinc-950/90">
    <div class="w-full py-2 px-4 max-w-screen-xl flex gap-6 justify-between">
        <div class="w-full flex gap-6 items-center">
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
        <div class="flex gap-1">
            <Search />
            <Button variant="ghost" size="icon" class="rounded-lg">
                <Github class="w-4 h-4" />
            </Button>
            <ModeToggle />
            
        </div>
    </div>
</div>
