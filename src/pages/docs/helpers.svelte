<script>
  import Prism from "svelte-prism";
  import { getContext } from "svelte";
</script>

<svelte:head>
  <title>Helpers - Routify</title>
</svelte:head>

<h1>Helpers</h1>

<p>Routify ships with a few handy helpers.</p>
<br />

<h3>
  url (
  <span class="text-gray-600">path, params?</span>
  )
</h3>
<b>path: string</b>
Path can be absolute or relative.
<br />
<b>params: object</b>
Parameters to be passed to the URL. Will default to parameters from current
<p>$url resolves paths relative to the page/layout file in which it is used.</p>
<p>  
  This ensures consistent URLs which are unaffected by the current browser address (unlike plain relative URLs which resolves from the browser address).
</p>
<p />

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
  <span class="text-gray-600">path, params?, static?, shallow?</span>
  )
</h3>

<b>Path: string</b>
Handled by the url() helper
<br />
<b>params: object</b>
Parameters to be passed to the URL. Will default to parameters from current
URL.
<br />
<b>static: boolean</b>
Render page on the current URL instead of redirecting.
<br />
<b>shallow: boolean</b>
Use the layouts from the current URL.
<br />

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

  console.log($params) /** {userId: 123, postId: 456} **/
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
  ]
</script>

{#each links as [path, name]}}
  <a href={$url(path)} class:active={$isActive(path)}>{name}</a>
{/each}
    
`}
</Prism>

<br />
<h3>leftover</h3>
Get the unconsumed part of the URL. Useful for fallbacks and navigating in
widgets.
<p>
  <i>Example on http://localhost/showawidget/123/update</i>
</p>
<Prism language="svelte">
  {`<!-- src/pages/showawidget/_fallback.svelte -->
<scr`}{`ipt>
  import CrudWidget from 'src/components/CrudWidget/Index.svelte'
  import data from './mydata.js'  
</script>

<CrudWidget {data} />
`}
</Prism>

<Prism language="svelte">
  {`<!-- src/components/CrudWidget/Index.svelte -->
<scr`}{`ipt>
  import { leftover } from '@sveltech/routify'
  export let data

  /** import pages into components **/
  import list from './_list.svelte'
  import view from './_view.svelte'
  import create from './_create.svelte'  
  import update from './_update.svelte'  
  const components = { view, create, update }

  /** get id and action from $leftover. If there's no action, we'll use 'view' **/
  $: [id, action = 'view'] = $leftover.split('/')
  $: component = id ? components[action]) : list;
</script>

<svelte:component this={component} {data} {id} />
`}
</Prism>
