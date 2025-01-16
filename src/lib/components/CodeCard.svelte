<script>
    import { Copy } from 'lucide-svelte';
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.css';
  import { onMount } from 'svelte';

  export let code = '';
  export let output = '';
  export let language = 'javascript';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  onMount(() => {
    Prism.highlightAll();
  });
</script>

<div>
  <div class="bg-slate-700 dark:bg-zinc-900 rounded-lg overflow-x-auto border">
    <div class="flex justify-between items-center px-4 py-2 border-b border-zinc-800 bg-slate-900/50 dark:bg-zinc-950/50">
      <div class="flex gap-2">
        <span class="w-3 h-3 rounded-full bg-red-500"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span class="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <button 
        class="text-zinc-400 text-xs hover:text-white px-2 py-1 rounded transition-colors"
        on:click={copyToClipboard}
      >
        Copy
      </button>
    </div>
    <pre class="m-0 p-0 "><code class="font-mono text-sm language-{language} p-0 ">{code}</code></pre>
    {#if output.length > 0}
    <div class="border-t border-zinc-800 mt-2">
      <div class="text-xs text-zinc-400 bg-slate-900/50 dark:bg-zinc-950/50 px-4 py-2 border-b">Output:</div>
      <div class="px-4 py-4 text-sm">
        <span class="text-green-500">davidref</span>
        <span class="text-white">></span>
        <span class="text-zinc-300"> {output}</span>
      </div>
    </div>
    {:else}
    <div class=""></div>
    {/if}
  </div>
</div>

<style>
  /* We still need these global styles to override Prism's default styling */
  :global(pre[class*="language-"]) {
    @apply bg-transparent p-0 m-0;
  }

  :global(code[class*="language-"]) {
    @apply py-0 px-4 m-0 text-sm;
  }

  /* Add this to control the spacing around code */
  pre {
    @apply px-4 py-0;
  }
</style>
