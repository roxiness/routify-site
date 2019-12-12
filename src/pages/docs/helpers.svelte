<script>
  import Prism from "svelte-prism";
  import { getContext } from "svelte";
  const routify = getContext("routify");
  console.log(routify)
  console.log($$props)
</script>

<h1>Helpers</h1>

<p>Routify ships with a few handy helpers.</p>
<br />

<h3>
  url(
  <span class="text-gray-600">path, {'<params>'}</span>
  )
</h3>
<b>path:</b>
string
<b>params:</b>
object
<p>Path can be absolute, relative or named.</p>

<Prism language="svelte">
  {`<!-- src/pages/recipes/cakes/cupcakes.svelte -->
<scr`}{`ipt>
  import { url } from '@sveltech/routify'

</script>

<!-- relative -->
<a href={url('../')}>Cakes</a>
<a href={url('./chocolate')}>Chocolate cupcakes</a>
<a href={url('./chocolate')}>Chocolate cupcakes</a>

`}
</Prism>

<Prism language="svelte">
  {`<!-- src/pages/docs/cakes/cupcakes.svelte -->
<scr`}{`ipt>
  export let scoped
</script>

<!-- renders foo: bar -->
foo: {scoped.foo}
`}
</Prism>
