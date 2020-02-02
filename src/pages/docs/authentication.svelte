<script>
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  import { getContext } from "svelte";
</script>

<svelte:head>
  <title>Auth & Guards - Examples - Routify</title>
</svelte:head>

<style>
  * :global(.tablinks > .selected) {
    @apply border-blue-500 border-b-2 -mb-1 text-black;
  }
</style>

<h1>Auth & Guards</h1>

<p>
  With Routify, you don't need any router included functions to authenticate
  users and protect your app.
</p>
<p>
  Since everything in Routify is scoped, protecting a layout, automatically
  protects all nested components recursively.
</p>

<br />
<br />
<h3>Authentication guards</h3>
<p>Users should generally be authenticated in the root layout.</p>

<div class="border border-gray-400 shadow-xl mt-2 p-4">
  <Tabs>
    <div class="tablinks border-b-2 border-gray-400 mb-2 text-gray-700">
      <TabsLink class="px-2 font-semibold">Minimal</TabsLink>
      <TabsLink class="px-2 font-semibold">Basic</TabsLink>
      <TabsLink class="px-2 font-semibold">Store</TabsLink>

    </div>
    <div class="tabpages">
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/_layout.svelte -->
<scr`}{`ipt>
  import { authenticate } from 'my-auth-service'
</script>

<!-- Wait with rendering the app till the user/guest is verified.
This prevents small UI glitches and premature authorization checks. -->
{#await authenticate()}
{:then}
  <slot />
{/await}
`}
        </Prism>
      </TabsPage>
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/_layout.svelte -->
<scr`}{`ipt>
  import { authenticate } from 'my-auth-service'
</script>

<!-- Wait with rendering the app till the user/guest is verified.
This prevents small UI glitches and premature authorization checks. -->
{#await authenticate()}

  <!-- Show a waiting message/page/animation here -->
  Verifying user...

<!-- Pass the user to all nested pages in the project -->
{:then user}
  <slot scoped={{user}} />
{/await}
`}
        </Prism>
      </TabsPage>
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/_layout.svelte -->
<scr`}{`ipt>
  import { user } from '../store'
</script>

{#if user}
  <slot />
{/if}

`}
        </Prism>
      </TabsPage>
    </div>
  </Tabs>
</div>

<br />
<br />

<h3>Authorization Guards</h3>
<p>
  Guards should be implemented in the component or module which they protect.
</p>
<div class="border border-gray-400 shadow-xl mt-2 p-4">
  <Tabs>
    <div class="tablinks border-b-2 border-gray-400 mb-2 text-gray-700">
      <TabsLink class="px-2 font-semibold">Scoped</TabsLink>
      <TabsLink class="px-2 font-semibold">Async (redirect)</TabsLink>
      <TabsLink class="px-2 font-semibold">Global guard</TabsLink>
      <TabsLink class="px-2 font-semibold">Global guard (redirect)</TabsLink>

    </div>
    <div class="tabpages">
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/admin/_layout.svelte -->
<scr`}{`ipt>
  export let scoped
</script>

{#if scoped.user.isAdmin}
  <slot />
{/if}
`}
        </Prism>
      </TabsPage>
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/admin/_layout.svelte -->
<scr`}{`ipt>
  import { goto } from '@sveltech/routify'
  import { authorize } from 'my-auth-service'  
</script>

{#await authenticate()}
  Checking permissions...
{:then}
  <slot />
{:catch}
  {$goto('/login')}
{/await}
`}
        </Prism>

      </TabsPage>
      <!-- Global guard -->
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/_layout.svelte -->
<scr`}{`ipt>
  import { goto } from '@sveltech/routify'
  import { authenticate } from 'my-auth-service'
  import Login from '../components/Login.svelte'
  
  let user = false
  let sessionVerified = false

  authenticate().then((res)=>{
    sessionVerified = true
    user = res
  })
</script>


{#if user}
  <slot scoped={{user}} />
<!-- wait in case there's a session that we need to verify -->
{:else if sessionVerified}
  <!-- User is a guest. Show a login widget instead of the current page. -->
  <Login let:user={user}>
{/if}

`}
        </Prism>

      </TabsPage>
      <!-- Global guard (redirect) -->
      <TabsPage>
        <Prism language="svelte">
          {`<!-- src/pages/_layout.svelte -->
<scr`}{`ipt>
  import { goto, isActive } from '@sveltech/routify'
  import { authorize } from 'my-auth-service'

  /** show if the current page is "/login" **/
  let show = $isActive('/login')
  
  /** else only show if user is authorized. Otherwise, redirect to login. **/
  if(!show)
    authorize()
      .then( ()=>{ show = true } )
      .catch( ()=> $goto('/login') )
</script>

{#if show}
  <slot />
{/if}
`}
        </Prism>

      </TabsPage>
    </div>
  </Tabs>

</div>

<br />
<br />

<h3>Realtime guards</h3>
<p>
  For realtime guards, simply replace
  <span class="shadow-inner px-1 bg-gray-200">{'{#await <promise>}'}</span>
  with
  <span class="shadow-inner px-1 bg-gray-200">{'{#if <reactive condition>}'}</span>
</p>
