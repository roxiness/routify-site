<script>
  import { SideNav } from "@sveltech/bricks";
  import { getContext } from "svelte";
  import NavLinks from "../components/NavLinks.svelte";
  const routify = getContext("routify");
  const { url } = routify;
</script>

<style>
  :global(.show .activator.desktop) {
    @apply text-white;
  }
  :global(.show-mobile .activator.mobile) {
    @apply text-white;
  }
</style>

<div>
  <SideNav
    class="shadow bg-gray-700 text-white overflow-y-auto overflow-x-hidden">
    <aside slot="aside">
      <a href="/" class="m-4 mb-0 block">
        <img src="/routify4.png" alt="" />
        <br />
      </a>
      <small class="ml-4">v1.0.1-x@next</small>
      <NavLinks />
    </aside>
    <div class="" />
    <slot />
  </SideNav>
</div>

<a class="absolute top-0 right-0" href="https://github.com/sveltech/routify">
<img src="/github.png" class="w-16">
</a>