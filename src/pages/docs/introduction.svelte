<style>
  h4 {
    @apply mt-4;
  }
  h6 {
    font-weight: bold;
  }
  ul {
    @apply rounded border border-gray-300 my-4 bg-white px-8 pt-2 pb-6;
  }
  li:not(:last-child) {
    @apply pb-4 my-4 border-b;
  }

  @screen sm {
    li {
      /* @apply text-lg; */
    }
  }
</style>

<div class="max-w-3xl m-auto">
  <h1>Routify</h1>

  <h4>Routes for Svelte, automated by your filestructure.</h4>

  <h5 class="pt-12">Cool, so what are the benefits?</h5>
  <ul>
    <li>
      <h5>Hit the ground running</h5>
      No need to configure a single route.
    </li>
    <li>
      <h5>SSOT and KISS</h5>
      If
      <span class="code">/recipes/cupcakes</span>
      doesn't exist in your browser, it doesn't exist in your project. That's
      easy debugging.
    </li>
    <li>
      <h5>Scoped everything</h5>
      Layouts, helpers, props, fallbacks, you name it. It's all scoped and
      context-aware.
    </li>
    <li>
      <h5>Resets</h5>
      Well, sometimes you don't want everything to be scoped. Maybe you don't
      want /restaurants/burger-queen to inherit any layout.
    </li>
    <li>
      <h5>And so on</h5>
      PWA ready, Code-splitting, Realtime route generation.
    </li>
  </ul>
  <br />
  <b>Want to have a look at the starter template?</b>
  <br />  
  <a class="underline" href="https://routify-starter.now.sh">https://routify-starter.now.sh</a>
  
</div>
