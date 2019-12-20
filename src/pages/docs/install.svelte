<script>
  import { url } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
</script>

<style>
  * :global(.tablinks > .selected) {
    @apply border-blue-500 border-b-2 -mb-1 text-black;
  }

  .step {
    @apply my-16;
  }
</style>

<h1>Install</h1>
<p>Aternatively to installing Routify, you can also clone the Routify starter template.</p>
<a class="code " href="https://github.com/sveltech/routify-starter">https://github.com/sveltech/routify-starter</a>  

<div class="step">
  <h4>1. Install module</h4>
  <div class="border border-gray-400 shadow-xl mt-2 p-4">
    <div class="pb-2">Run in project folder</div>
    <span class="code py-1">npm i -d @sveltech/routify@next</span>
  </div>
</div>

<div class="step">
  <h4>2. Choose a bundler</h4>
  <div class="border border-gray-400 shadow-xl mt-2 p-4">
    <Tabs>
      <div class="tablinks border-b-2 border-gray-400 mb-2 text-gray-700">
        <TabsLink class="px-2 font-semibold">CLI</TabsLink>
        <TabsLink class="px-2 font-semibold">Rollup</TabsLink>

      </div>
      <div class="tabpages">
        <TabsPage>
          <Prism language="javascript">
            {`/** package.json **/
...
 "devDependencies": {
    "npm-run-all": "^4.1.5",
    ...
},
"scripts": {
  "dev": "run-p watch:routify watch:rollup",
  "watch:rollup": "rollup -c -w",
  "watch:routify": "routify",
  ...
}  
`}
          </Prism>
        </TabsPage>
        <TabsPage>
          <Prism language="javascript">
            {`/** rollup.config.js **/
...
  plugins: [
    routify({ /** options **/ }),
    ...
  ]`}
          </Prism>
        </TabsPage>
      </div>
    </Tabs>
  </div>
</div>

<div class="step">
  <h4>3. Add router to your app</h4>
  <div class="border border-gray-400 shadow-xl mt-2 p-4">
    <Prism language="html">
      {`<!-- src/App.svelte -->
<scrip`}{`t>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
</script>

<Router {routes} />
`}
    </Prism>
  </div>
</div>

<div class="step">
  <h4>4. Enable SPA (optional)</h4>
  <p>
    If you're using history based navigation, make sure that your server
    redirects all requests to "/".
  </p>
  <div class="border border-gray-400 shadow-xl mt-2 p-4">
    <Tabs>
      <div class="tablinks border-b-2 border-gray-400 mb-2 text-gray-700">
        <TabsLink class="px-2 font-semibold">Sirv</TabsLink>
        <TabsLink class="px-2 font-semibold">Other</TabsLink>

      </div>
      <div class="tabpages">
        <TabsPage>
          <p>For Sirv, enable the single option.</p>
          <Prism language="javascript">
            {`/** package.json **/
...
"scripts": {
  "start": "sirv public --single"
  ...
}  
`}
          </Prism>
        </TabsPage>
        <TabsPage>
          <p>
            For other servers, consult the documentation on how to redirect all
            requests. This is also known as URL-rewrites.
          </p>
        </TabsPage>
      </div>
    </Tabs>
  </div>
</div>
