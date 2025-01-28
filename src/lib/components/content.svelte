<script>
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import CodeCard from "./CodeCard.svelte";
    import { page } from "$app/stores";
    import { data } from "../../routes/javascript/[slug]/data";
    import { onMount, afterUpdate } from "svelte";

    // Make this reactive by using $:
    $: slug = $page.params.slug;
    $: currentSection = data.find(
        (section) =>
            section.sectionTitle.toLowerCase().replace(/\s+/g, "") ===
            slug?.toLowerCase().replace(/\s+/g, ""),
    );

    // Add more detailed debugging
    $: {
        console.log("Slug changed to:", slug);
        if (currentSection) {
            console.log("Current section:", currentSection.sectionTitle);
            console.log("Section content:", currentSection.littleSections);
        }
    }

    // Add afterUpdate to handle route changes
    afterUpdate(() => {
        console.log("Component updated");
    });
</script>

<div class="w-full lg:max-w-3xl h-full py-8 flex flex-col gap-6 xl:px-2 px-4">
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
        <div class="flex flex-col gap-0">
            {#each currentSection.littleSections as section (section.name)}
                <div class="flex flex-col " id={section.name}>
                    <div class="font-semibold text-xl mt-14" >
                        {section.name}
                    </div>

                    {#each section.descriptions as desc}
                        <div class="flex flex-col">
                            <div class="font-semibold">{desc.name}</div>
                            <div class="text-zinc-600 dark:text-zinc-400">
                                {desc.desc}
                            </div>
                        </div>
                    {/each}

                    {#if section.code}
                        <CodeCard code={section.code} output={section.output} />
                    {/if}
                </div>
            {/each}
        </div>
    {:else}
        <div>Section not found</div>
    {/if}
</div>
