File scheme
Basic
src/pages/about.svelte corresponds to /about

Parameters
src/pages/admin/[business].svelte corresponds to /admin/:business

To exclude
src/admin/_navbar.svelte corresponds to nothing as _prefixed files are ignored.

Layouts
Layout files are named _layout.svelte and apply to all adjacent and nested svelte files. A file can have multiple layouts if multiple layouts are recursively present in parent folders.

Resets
Reset files are named _reset.svelte. They function exactly like layout files, but do no inherit parent layouts.

404 and fallbacks
404s can be caught with _fallback.svelte. The first _fallback.svelte that's found while traversing back through parent folders will be used.