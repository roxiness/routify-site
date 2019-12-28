<script>
  import Prism from "svelte-prism";
</script>

<svelte:head>
  <title>Parameters - Routify</title>
</svelte:head>

<h1>Parameters</h1>
<p>Parameters are passed as props to their respective pages/layouts.</p>
<p>To access all parameters, use the "params" helper</p>
<Prism language="svelte">
  {`  <!-- src/pages/users/[userId/posts/[postId].svelte -->
  <!-- URL: /users/jimbo/posts/123 -->
<scr`}{`ipt>
  import { params } from '@sveltech/routify'
  export let postId, userId

  console.log( postId ) /** '123' **/
  console.log( userId ) /** undefined **/
  console.log( $params ) /** {userId: 'jimbo', postId: '123'} **/
</script>
`}
</Prism>