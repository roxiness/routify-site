<style>
  h3 {
    @apply pt-6;
  }
</style>

<svelte:head>
  <title>File scheme - Routify</title>
</svelte:head>

<h1>File scheme</h1>

<h3>Mapping</h3>
<p>
  <code class="code">src/pages/about.svelte</code>
  corresponds to
  <code class="code">/about</code>
</p>

<h3>Parameters</h3>
<p>
  <code class="code">src/pages/admin/[business].svelte</code>
  corresponds to
  <code class="code">/admin/:business</code>
  , where :business is a parameter.
</p>

<h3>Excluding files</h3>
<p>
  Files and directories prefixed with underscore will not be picked up by
  Routify. (except for _layout.svelte and _reset.svelte)
</p>

<h3>Layouts</h3>
<p>
  Layout files are named _layout.svelte and apply to all adjacent and nested
  svelte files. A file can have multiple layouts if multiple layouts are
  recursively present in parent folders.
</p>

<h3>Resets</h3>
<p>
  Reset files are named _reset.svelte. They function like layout files,
  but do no inherit the parent scope (layouts, props, etc.).
</p>

<h3>404 and fallbacks</h3>
<p>
  404s can be caught with <code class="code">_fallback.svelte</code>. The first <code class="code">_fallback.svelte</code> that's
  found while traversing back through parent folders will be used.
</p>
<p>
  Fallback inherits layout. In certain cases, the style "position:fixed" is
  useful for a fullscreen fallback.
</p>
