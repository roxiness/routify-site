<script>
  import { Details } from "@sveltech/bricks";
  import { route } from "@sveltech/routify";
  import { getContext } from "svelte";

  import PowerIcon from "@iconscout/unicons/svg/line/power.svg";
  import TextIcon from "@iconscout/unicons/svg/line/book-open.svg";
  import RulerIcon from "@iconscout/unicons/svg/line/ruler-combined.svg";
  import LayerIcon from "@iconscout/unicons/svg/line/layer-group.svg";
  import SuitcaseIcon from "@iconscout/unicons/svg/line/suitcase-alt.svg";
  import FolderIcon from "@iconscout/unicons/svg/line/folder.svg";

  const links = [
    { path: "/docs/introduction", name: "Introduction", icon: TextIcon },
    {
      path: "#",
      name: "Getting Started",
      icon: PowerIcon,
      children: [
        { path: "/docs/install", name: "Install", icon: FolderIcon },
        { path: "/docs/config", name: "Config", icon: FolderIcon },
        
        ]
    },
    {
      path: "#",
      name: "Guide",
      icon: RulerIcon,
      children: [
        { path: "/docs/scheme", name: "Scheme", icon: RulerIcon },
        { path: "/docs/parameters", name: "Parameters", icon: RulerIcon },
        { path: "/docs/props", name: "Props", icon: RulerIcon },
        { path: "/docs/helpers", name: "Helpers", icon: RulerIcon },
        { path: "/docs/codesplitting", name: "Code-splitting", icon: RulerIcon },

      ]
    },
    { path: "#", name: "Examples", icon: FolderIcon, children: [
        {
          path: "/docs/authentication",
          name: "Auth & guards",
          icon: RulerIcon
        }
    ] }
  ];

  function selected(link, $route) {
    return ($route && $route.path.includes(link.path) && "selected") || "";
  }
</script>

<style>
  a.selected {
    @apply bg-gray-600;
  }
  a.link {
    @apply block fill-current cursor-pointer;
  }
  a.link:hover {
    @apply bg-gray-600;
  }
</style>

<div class="mt-4 border-t border-gray-600 ">
  {#each links as link, i}
    <a
      on:click={() => {
        link.hideChildren = !link.hideChildren;
      }}
      href={link.path}
      class="link border-b border-gray-600 {selected(link, $route)}">
      <div class="h-16 inline-block align-middle" />
      {#if link.icon}
        <span class="px-5 inline-block align-middle " style="width:64px;">
          {@html link.icon}
        </span>
      {/if}
      <span class="align-middle inline-block {link.icon ? '' : 'pl-5'}">
        {link.name}
      </span>
    </a>

    {#if link.children}
      <Details show={!link.hideChildren}>
        <div class="subnav">
          {#each link.children as link}
            <a
              href={link.path}
              style="padding-left:64px"
              class="link {selected(link, $route)}">
              <div class="h-16 inline-block align-middle" />
              {link.name}
            </a>
          {/each}
        </div>
      </Details>
    {/if}
  {/each}
</div>
