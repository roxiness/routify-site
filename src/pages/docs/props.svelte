<script>
  import Prism from 'svelte-prism'
</script>

<h1>Props</h1>


<p>All pages can pass props to nested pages with the "scoped" prop.</p>

<p>Ie. Any prop made available in /docs/_layout.svelte is available to all files nested in the /docs/ folder and subfolders.</p>



<Prism language="svelte">{`<!-- src/pages/docs/_layout.svelte -->
<scr`}{`ipt>
  const scoped = {foo: 'bar'}
</script>

<slot {scoped} />
`}</Prism>

{ console.log('foobar') }

<Prism language="svelte">{`<!-- src/pages/docs/cakes/cupcakes.svelte -->
<scr`}{`ipt>
  export let scoped
</script>

<!-- renders foo: bar -->
foo: {scoped.foo}
`}</Prism>