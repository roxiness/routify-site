<script>
  import Prism from "svelte-prism";
  import { Tabs, TabsPage, TabsLink } from "@sveltech/bricks";
</script>

<h1>Code-splitting</h1>

<div class="step">
  <h4>1. Enable code-splitting</h4>

  <div class="card">
    <Tabs>
      <div class="tablinks">
        <TabsLink class="px-2 font-semibold">CLI</TabsLink>
        <TabsLink class="px-2 font-semibold">Rollup</TabsLink>

      </div>
      <div class="tabpages">
        <TabsPage>
          <p>Update package.json</p>
          <Prism language="javascript">
            {`...
"scripts": {
  "start:routify": "routify -D"
...`}
          </Prism>
          <br />
          <p>Update rollup.config.js</p>
          <Prism language="javascript">
            {`...
  output: {
    format: 'esm',
    dir: 'public/bundle'
    /** remember to remove "file: 'bundle.js'" or equivalent **/
...`}
          </Prism>
        </TabsPage>
        <TabsPage>
          <p>Update rollup.config.js</p>
          <Prism language="javascript">
            {`import {routify} from '@sveltech/routify'
  ...
  plugins: [
    routify({ dynamicImports: true })
    ...
  ],
  output: {
    format: 'esm',
    dir: 'public/bundle'
    /** remember to remove "file: 'bundle.js'" or equivalent **/
    ...
  ...
        
`}
          </Prism>
        </TabsPage>
      </div>
    </Tabs>
  </div>
</div>

<div class="step">
  <h4>2. Update public/index.html</h4>
  <div class="card">
    <div>
      <span class="w-16 inline-block">Replace</span>
      <span class="code">{`<scr`}{`ipt defer src='/bundle.js'></script>`}</span>
      <br />
      <span class="w-16 inline-block">with</span>
      <span class="code">
        {`<scri`}{`pt type="module" defer src='/bundle/main.js'></script>`}
      </span>
    </div>
  </div>
</div>