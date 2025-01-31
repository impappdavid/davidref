<script>
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import CodeCard from "./CodeCard.svelte";
    import { page } from "$app/stores";
    import { data } from "../../routes/javascript/[slug]/data";
    import { onMount, afterUpdate } from "svelte";
    import * as Table from "$lib/components/ui/table";

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
                    {#if section.table}
                    <Table.Root class="rounded-xl border z-10">
                        <Table.Header class="border-b border-zinc-800 bg-slate-700 dark:bg-zinc-950  rounded-t-xl">
                          <Table.Row class="rounded-xl hover:bg-slate-900/50 dark:hover:bg-zinc-900/60  bg-slate-900/50 dark:bg-zinc-900/60 rounded-t-xl">
                            {#each section.table[0].header as header}
                                <Table.Head class="w-[100px] text-zinc-400">{header}</Table.Head>
                            {/each}
                          </Table.Row>
                        </Table.Header>
                        <Table.Body class="bg-slate-500 dark:bg-zinc-900/60">
                            {#each section.table[0].body as row}
                              <Table.Row class="bg-slate-900/50 dark:bg-zinc-900 text-zinc-400 hover:bg-slate-900/50 dark:hover:bg-zinc-900/60  text-xs">
                                {#each row as cell}
                                    <Table.Cell>{@html cell}</Table.Cell>
                                {/each}
                              </Table.Row>
                            {/each}
                        </Table.Body>
                      </Table.Root>
                    {/if}


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
