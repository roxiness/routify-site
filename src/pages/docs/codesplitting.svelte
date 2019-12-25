<script>
  import Prism from "svelte-prism";
</script>

<h1>Code-splitting</h1>
<h3>(Draft)</h3>

<br />
<br />

<h5>package.json</h5>
<Prism language="javascript">{`...
"scripts": {
    ...
    "start:routify": "routify -D"
`}
</Prism>



<br>
<br>




<h5>public/index.html</h5>
<div>
  Replace
  <span class="code">{`<scr`}{`ipt defer src='/bundle.js'></script>`}</span>
  <br />
  with
  <br />
  <span class="code">
    {`<scri`}{`pt type="module" defer src='/bundle/main.js'></script>`}
  </span>
</div>


<br />
<br />
<h5>rollup.config.js</h5>
<Prism language="javascript">
  {`...
output: {
    ...
    format: 'esm',
    dir: 'public/bundle'
`}
</Prism>
