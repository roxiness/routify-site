<script>
  import Prism from "svelte-prism";
  import { getContext } from "svelte";
</script>

<h1>Helpers</h1>

<p>Routify ships with a few handy helpers.</p>
<br />

<h3>
  url (
  <span class="text-gray-600">path, params?</span>
  )
</h3>
<b>path:</b>
string
<b>params:</b>
object
<p>Path can be absolute or relative.</p>
<p>
  Relative paths are based on the filestructure of the current page component
  instead of the current url.
</p>

<Prism language="svelte">
  {`<!-- src/pages/recipes/cakes/cupcakes.svelte -->
<scr`}{`ipt>
  import { url } from '@sveltech/routify'
</script>

<!-- relative -->
<a href={$url('../../ingredients/sugar')}>Info about sugar</a>

<!-- absolute -->
<a href={$url('/ingredients/sugar')}>Info about sugar</a>

<!-- params -->
<a href={$url('/users/:id', {id: '123'})}>Info author</a>
`}
</Prism>

<br />
<h3>
  goto (
  <span class="text-gray-600">path, params?</span>
  )
</h3>
Syntax sugar for
<span class="shadow-inner bg-gray-200 rounded px-2">
  history.pushState({'{}'}, null, url(path, params?))
</span>

<Prism language="svelte">
  {`<!-- src/pages/redirect.svelte -->
<scr`}{`ipt>
  import { goto } from '@sveltech/routify'  
  $goto('./some/where/else')  
</script>
`}
</Prism>

<br />
<h3>params</h3>
Access parameters from URL.
<Prism language="svelte">
  {`<!-- src/pages/user/[userId]/posts/[postId].svelte -->
<scr`}{`ipt>
  import { params } from '@sveltech/routify'  
  export let postId, userId

  console.log(params) /** {userId: 123, postId: 456} **/
  console.log(postId) /** 456 **/
  console.log(userId) /** undefined (parameter does not exist on [postId].svelte) **/
</script>
`}
</Prism>

<br />
<h3>isActive</h3>
See if a page is the current route
<Prism language="svelte">
  {`<!-- src/pages/_layout.svelte -->
<scr`}{`ipt>
  import { isActive, url } from '@sveltech/routify'  
  
  const links = [
    ['./index', 'Home'],
    ['./about', 'About'],
    ['./contact', 'Contact']
  ].map(([path, name]) => {
    return {
      name,
      href: url(path),
      active: $isActive(path)
    }
  })
</script>

<style>
  .active {font-weight: bold;}
</sty`}{`le>


{#each links as {name, href, active}}
  <a {href} class:active>{name}</a>
{/each}
    
`}
</Prism>
