<script>
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import CodeCard from "./CodeCard.svelte";
    import { page } from "$app/stores";
    import { data } from "../../routes/javascript/[slug]/data";

    // Get the slug and find current section
    $: slug = $page.params.slug;
    $: currentSection = data.find(
        (section) => section.sectionTitle.toLowerCase().replace(/\s+/g, '') === slug?.toLowerCase().replace(/\s+/g, ''),
    );

   
</script>

<div class="w-full max-w-3xl h-full py-6  flex flex-col gap-4">
    <Breadcrumb.Root>
        <Breadcrumb.List>
            <Breadcrumb.Item>
                <Breadcrumb.Page class="text-zinc-600 dark:text-zinc-400"
                    >Javascript</Breadcrumb.Page
                >
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
                <Breadcrumb.Page
                    >{currentSection?.sectionTitle || ""}</Breadcrumb.Page
                >
            </Breadcrumb.Item>
        </Breadcrumb.List>
    </Breadcrumb.Root>

    {#if currentSection}
        <div class="flex flex-col gap-2">
            <div class="text-4xl font-bold">{currentSection.sectionTitle}</div>
            <div class="text-zinc-600 dark:text-zinc-400">
                {currentSection.description}
            </div>
        </div>

        {#each currentSection.littleSections as section}
            <div class="font-semibold text-xl mt-4 " id={section.name}>{section.name}</div>
            
            {#each section.descriptions as desc}
                <div class="flex flex-col gap-0">
                    <div class="font-semibold">{desc.name}</div>
                    <div class="text-zinc-600 dark:text-zinc-400">{desc.desc}</div>
                </div>
            {/each}
            {#if section.code}
            <CodeCard 
                code={section.code} 
                output={section.output}
            />
        {/if}
        {/each}

        
    {:else}
        <div>Section not found</div>
    {/if}
</div>
