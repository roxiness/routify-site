<script>
  import Prism from "svelte-prism";
</script>

<h1>Props</h1>

<p>All pages can pass props to nested pages with the "scoped" prop.</p>

<p>
  Ie. Any prop made available in /docs/_layout.svelte is available to all files
  nested in the /docs/ folder and subfolders.
</p>

<Prism language="svelte">
  {`<!-- src/pages/_layout.svelte -->
<slot scoped={{user: 'jimbo', foo: 'bar'}} />
`}
</Prism>

<Prism language="svelte">
  {`<!-- src/pages/cakes/_layout.svelte -->
<slot scoped={{foo: 'baz is better'}} />
`}
</Prism>

<Prism language="svelte">
  {`<!-- src/pages/cakes/cupcakes.svelte -->
<scr`}{`ipt>
  export let scoped
  console.log(scoped) /** {user: "jimbo", foo: "baz is better"} **/
</script>
`}
</Prism>