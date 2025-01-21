<script>
    import { page } from '$app/stores';
</script>
<div
    class="w-80 h-full max-h-[915px] px-4 py-4 overflow-y-auto flex flex-col gap-8 sticky top-14"
>
    
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Basics</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./comments" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('comments') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Comments</a>
            <a 
                href="./variables" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('variables') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Variables</a>
            <a 
                href="./operators" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('operators') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Operators</a>
            <a 
                href="./datatypes" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('datatypes') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Data types</a>
            <a 
                href="./functions" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('functions') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Functions</a>
        </div>
    </div>
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Objects</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./objects" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objects') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Objects</a>
            <a 
                href="./objectproperties" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objectproperties') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Object Properties</a>
            <a 
                href="./objectmethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objectmethods') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Object Methods</a>
            <a 
                href="./objectconstructors" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objectconstructors') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Object Constructors</a>
        </div>
    </div>
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Strings</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./strings" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('strings') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >Strings</a>
            <a 
                href="./stringmethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('stringmethods') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >String Methods</a>
            <a 
                href="./stringsearch" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('stringsearch') ? 'text-black dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400'}"
            >String Search</a>
           
        </div>
    </div>
</div>
