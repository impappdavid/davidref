<script>
    import { page } from '$app/stores';
</script>
<div
    class="w-80 h-full max-h-[913px] px-4 py-4 overflow-y-auto flex-col gap-8 sticky top-14 lg:flex hidden"
>
    
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Basics</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./comments" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('comments') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Comments</a>
            <a 
                href="./variables" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('variables') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Variables</a>
            <a 
                href="./operators" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('operators') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Operators</a>
            <a 
                href="./datatypes" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('datatypes') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Data types</a>
            <a 
                href="./functions" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('functions') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Functions</a>
        </div>
    </div>
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Objects</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./objects" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objects') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Objects</a>
            <a 
                href="./objectproperties" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objectproperties') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Object Properties</a>
            <a 
                href="./objectmethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objectmethods') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Object Methods</a>
            <a 
                href="./objectconstructors" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('objectconstructors') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Object Constructors</a>
        </div>
    </div>
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Strings</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./strings" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('strings') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Strings</a>
            <a 
                href="./stringmethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('stringmethods') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >String Methods</a>
            
           
        </div>
    </div>

    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Numbers</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./numbers" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('numbers') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Numbers</a>
            <a 
                href="./bigint" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('bigint') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >BigInt</a>
            <a 
                href="./numbermethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('numbermethods') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Number Methods</a>
            <a 
                href="./numberproperties" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('numberproperties') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Number Properties</a>
        </div>
    </div>

    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Arrays</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./arrays" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('arrays') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Arrays</a>
            <a 
                href="./arraymethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('arraymethods') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Array Methods</a>
            <a 
                href="./arraysearch" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('arraysearch') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Array Search</a>
            <a 
                href="./arraysort" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('arraysort') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Array Sort</a>
            <a 
                href="./arrayiteration" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('arrayiteration') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Array Iteration</a>
            <a 
                href="./arrayconst" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('arrayconst') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Array Const</a>
        </div>
    </div>

    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Dates</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./dates" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('dates') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Dates</a>
            <a 
                href="./dateformats" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('dateformats') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Date Formats</a>
            <a 
                href="./dategetmethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('dategetmethods') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Date Get Methods</a>
            <a 
                href="./datesetmethods" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('datesetmethods') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Date Set Methods</a>
        </div>
    </div>

    <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
            <a 
                href="./math" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('math') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Math</a>
            <a 
                href="./random" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('random') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Random</a>
            <a 
                href="./booleans" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('booleans') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Booleans</a>
            <a 
                href="./comparisons" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('comparisons') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >Comparisons</a>
            <a 
                href="./ifelse" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('ifelse') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >If Else</a>
            <a 
            href="./switch" 
            class="text-sm hover:underline {$page.url.pathname.endsWith('switch') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
        >Switch</a>
        </div>
    </div>

    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">Loops</div>
        <div class="flex flex-col gap-2">
            <a 
                href="./for" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('for') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >For</a>
            <a 
                href="./forin" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('forin') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >For In</a>
            <a 
                href="./forof" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('forof') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >For Of</a>
            <a 
                href="./while" 
                class="text-sm hover:underline {$page.url.pathname.endsWith('while') ? 'text-black dark:text-white font-medium underline' : 'text-zinc-600 dark:text-zinc-400'}"
            >While</a>
        </div>
    </div>

    

</div>
