<script lang="ts">
    import { data } from "../../routes/javascript/[slug]/data";
    import * as Command from "$lib/components/ui/command/index.js";
    import { Button } from "./ui/button";
    import { goto } from "$app/navigation";

    console.log("Initial data:", data);

    let open = $state(false);
    let searchQuery = $state("");

    function handleKeydown(e: KeyboardEvent) {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey))) {
            e.preventDefault();
            open = !open;
        }
    }

    function navigateToSection(title: string) {
        const slug = title.toLowerCase().replace(/\s+/g, "");
        goto(`/javascript/${slug}`);
        open = false;
    }

    function handleSearch(e: Event) {
        const target = e.target as HTMLInputElement;
        searchQuery = target.value;
    }

    const filteredSections = $derived(
        searchQuery
            ? (console.log("Current search query:", searchQuery),
              data.filter((section) => {
                  console.log("Checking section:", section.sectionTitle);
                  const matches = section.sectionTitle
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase());
                  console.log(`${section.sectionTitle} matches: ${matches}`);
                  return matches;
              }))
            : data,
    );

    $effect(() => {
        console.log("Filtered sections:", filteredSections);
    });

    console.log("queary:", searchQuery);
</script>

<svelte:document onkeydown={handleKeydown} />

<Button
    variant="outline"
    class="text-muted-foreground text-sm flex gap-4 rounded-lg sm:flex hidden outline-none "
    onclick={() => (open = !open)}
>
    <div class="">Search documentation...</div>
    <kbd
        class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100"
    >
    <span class="text-xs">⌘</span>K
    </kbd>
</Button>

<Button
    variant="outline"
    class="text-muted-foreground text-sm flex gap-4 rounded-lg border-none sm:hidden flex"
    onclick={() => (open = !open)}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        ><path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
        /></svg
    >
</Button>

<Command.Dialog bind:open>
    <Command.Input
        placeholder="Search documentation..."
        value={searchQuery}
        onInput={handleSearch}
    />
    <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Documentation">
            {#each filteredSections as section}
                <Command.Item
                    onSelect={() => navigateToSection(section.sectionTitle)}
                >
                    <div class="text-sm">{section.sectionTitle}</div>
                </Command.Item>
            {/each}
        </Command.Group>
    </Command.List>
</Command.Dialog>
