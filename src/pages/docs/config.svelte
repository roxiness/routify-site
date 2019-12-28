<script>
  import { url } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";

  const config = {
    debug: ["boolean", "false", "Extra debugging."],
    pages: ["string", "./src/pages", "Path to pages."],
    ignore: [
      "array|string",
      "",
      "Files and dirs to be ignored. Interpreted as regular expression."
    ],
    unusedPropWarnings: [
      "boolean",
      "false",
      "Show warnings about unused props passed by filerouter."
    ],
    dynamicImports: ["boolean", "false", "Code splitting."],
    singleBuild: ["boolean", "false", "Don't watch for file changes."]
  };
</script>

<style>
  .prop {
    @apply pb-1 px-3 border-b border-gray-300;
  }
  .prop:last-of-type {
    @apply border-none;
  }

  .prop > .name {
    @apply font-bold;
  }
  .prop > * {
    @apply my-2;
  }
</style>

<h1>Config</h1>

<h3 class="pt-12 pb-4">
  Routify can be configured with the following options.
</h3>

<div class="pb-5 pt-2 bg-white shadow">
  <ul class="flex flex-wrap mx-3 mt-2 text-xs text-gray-700 font-bold">
    <li class="w-56">Name</li>
    <li class="flex-auto">Type</li>
    <li class="w-1/3">Default value</li>
  </ul>
  <ul>
    {#each Object.entries(config) as [name, [type, defaultValue, description]]}
      <li class="flex flex-wrap prop">
        <div class="w-56 name">{name}</div>
        <div class="flex-auto type text-gray-600">{type}</div>
        <div class="w-1/3 default overflow-hidden text-gray-600">
          {defaultValue}
        </div>
        <div class="w-full">
          {@html description}
        </div>
      </li>
    {/each}
  </ul>
</div>

<h3 class="pt-12">To use with CLI</h3>

<Prism language="html">
  {`$ npx routify --help
Usage: cli [options]

Options:
  -d, --debug                 extra debugging
  -p, --pages <location>      path/to/pages (Defaults to ./src/pages)
  -i, --ignore <list>         ["widget.svelte"] (Files and dirs. Can be string or array. Interpreted as regular expression)
  -u, --unused-prop-warnings  Show warnings about unused props passed by filerouter
  -D, --dynamic-imports       Experimental code splitting. Defaults to false.)
  -s, --single-build          Don\'t watch for new route files
  -h, --help                  output usage information
`}
</Prism>

<h5>CLI + Sirv example</h5>

<Prism>
  {`/** package.json **/
...
"scripts": {
  "debug:routify": "routify -du --pages ./src/path/to/pages",
  "start:routify": "routify --pages ./src/path/to/pages",
  "dev:start": "run-p debug:routify start:sirv autobuild",
  ...
}  
`}
</Prism>
