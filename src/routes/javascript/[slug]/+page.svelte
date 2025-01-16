<script>
    import Navbar from "$lib/components/navbar.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import OnThisPage from "$lib/components/onthispage.svelte";
    import Content from "$lib/components/content.svelte";
    import { data } from "./data";

    console.log(data);
</script>

<div class="w-full flex flex-col items-center">
    <Navbar />
    <div class="w-full flex max-w-6xl">
        <Sidebar />
        <Content />
        <OnThisPage />
    </div>
</div>
