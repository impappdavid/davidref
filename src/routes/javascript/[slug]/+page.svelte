<script>
    import Navbar from "$lib/components/navbar.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import OnThisPage from "$lib/components/onthispage.svelte";
    import Content from "$lib/components/content.svelte";
    import { page } from "$app/stores";
    import { data } from "./data";

    $: currentSlug = $page.params.slug;
</script>

<div class="w-full flex flex-col items-center">
    <Navbar />
    <div class="w-full flex max-w-6xl">
        <Sidebar />
        <Content />
        <OnThisPage />
    </div>
</div>
