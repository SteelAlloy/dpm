# Deno Package Manager [W.I.P.]
DPM or Deno Package Manager is an NPM like package manager for [Deno](https://deno.land). While Deno's original philosophy is to cache all of it's dependencies by downloading them via URLs, some people prefer the NodeJS way of importing modules. This project is for these savages (wink wink).

DPM downloads the desired package, when using `dpm install <modulename>` from [deno.land/x](https://deno.land/x) or from the given URL and stores it within the `deno_modules` directory, while managing all your dependencies inside the `deps.json` file, in your project root.

## Installing
**Please do not install DPM yet. It's still in development. Contributions are welcome.**

To install DPM, you'll need to give it `allow-net`, `allow-read` and `allow-write` permissions