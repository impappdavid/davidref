<script>
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import CodeCard from "./CodeCard.svelte";

    let code = `
function apple(){
    console.log("hello")
}
apple();
    `
   
</script>

<div class="w-full max-w-3xl h-full py-4 flex flex-col gap-4">
    <Breadcrumb.Root>
        <Breadcrumb.List>
            <Breadcrumb.Item>
                <Breadcrumb.Page class="text-zinc-400"
                    >Javascript</Breadcrumb.Page
                >
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
                <Breadcrumb.Page>Introduction</Breadcrumb.Page>
            </Breadcrumb.Item>
        </Breadcrumb.List>
    </Breadcrumb.Root>
    <div class="flex flex-col gap-2">
        <div class="text-4xl font-bold">Introduction</div>
        <div class="text-zinc-400">
            Re-usable components built with Bits UI, Melt UI, and Tailwind CSS.
        </div>
    </div>
    <div class="">
        An unofficial, community-led Svelte port of shadcn/ui. We are not affiliated with shadcn, but we did get his blessing before creating a Svelte version of his work. This project was born out of the need for a similar project for the Svelte ecosystem.
    </div>
    <div class="">
        This is NOT a component library. It's a collection of re-usable components that you can copy and paste or use the CLI to add to your apps.
    </div>

    <div class="font-semibold">What do you mean not a component library?</div>

    <div class="">It means you do not install it as a dependency. It is not available or distributed via npm, with no plans to publish it.</div>

    <CodeCard code={code} />
</div>
