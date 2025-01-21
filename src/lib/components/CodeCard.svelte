<script>
    import { Copy } from 'lucide-svelte';
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.css';
  import { onMount, afterUpdate } from 'svelte';

  export let code = '';
  export let output = '';
  export let language = 'javascript';

  let copySuccess = false;

  // Add reactive statement to track code changes
  $: {
    if (code) {
      console.log('Code changed:', code.substring(0, 50) + '...');
      highlightCode();
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      copySuccess = true;
      setTimeout(() => {
        copySuccess = false;
      }, 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const highlightCode = () => {
    // Ensure we're not calling this before the DOM is ready
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    }
  };

  onMount(highlightCode);
  afterUpdate(highlightCode);
</script>

<div>
  <div class="bg-slate-700 dark:bg-zinc-900 rounded-lg overflow-x-auto border">
    <div class="flex justify-between items-center px-4 py-2 border-b border-zinc-800 bg-slate-900/50 dark:bg-zinc-950/50">
      <div class="text-xs text-zinc-400 ">Code:</div>
      <button 
        size="icon"
        class="text-zinc-400 text-xs hover:bg-zinc-800 px-1.5 py-1.5 rounded transition-colors"
        on:click={copyToClipboard}
      >
      {#if copySuccess}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
        </svg>
      {/if}
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
  :global(pre[class*="language-"]) {
    @apply bg-transparent p-0 m-0;
  }

  :global(code[class*="language-"]) {
    @apply py-0 px-4 m-0 text-sm;
  }

  pre {
    @apply px-4 py-0;
  }
</style>
