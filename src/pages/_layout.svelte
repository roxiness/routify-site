<script>
  import { SideNav } from "@sveltech/bricks";
  import { getContext } from "svelte";
  import NavLinks from "../components/NavLinks.svelte";
  const routify = getContext("routify");
  console.log("routify", routify);
  const { url } = routify;
  // import { getContext } from "@sveltech/routify";
  // const url2 = url()
  // console.log('url2', $url2)
  // console.log('url', $url('./introduction'))
</script>

<SideNav
  class="shadow bg-gray-700 text-white overflow-y-auto overflow-x-hidden">
  <aside slot="aside">
    <a href="/" class="m-4 block">
    <img src="/routify4.png" alt="">
      <!-- <h6>Sveltech</h6>
      <h3>Routify</h3> -->
    </a>
    <NavLinks />
  </aside>
  <div class="" />
  <slot />
</SideNav>
