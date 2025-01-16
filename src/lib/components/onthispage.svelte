<script>
    import { data } from "../../routes/javascript/[slug]/data";
    import { page } from "$app/stores";
    // Get the slug and find current section
    $: slug = $page.params.slug;
    $: currentSection = data.find(
        (section) => section.sectionTitle.toLowerCase() === slug?.toLowerCase(),
    );
</script>

<div
    class="w-80 h-full max-h-[915px] px-4 py-4 overflow-y-auto flex flex-col gap-8 sticky top-14"
>
    <div class="flex flex-col gap-3">
        <div class="text-sm font-bold">On This Page</div>
        <div class="flex flex-col gap-2">
            {#if currentSection}
            {#each currentSection.littleSections as section}
                <a
                    href={`#${section.name}`}
                    class="text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                    >{section.name}</a
                >
            {/each}
            {/if}
        </div>
    </div>
</div>
