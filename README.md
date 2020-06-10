# Deno Package Manager [W.I.P.]
DPM or Deno Package Manager is an NPM like package manager for [Deno](https://deno.land). While Deno's original philosophy is to cache all of it's dependencies by downloading them via URLs, some people prefer the NodeJS way of importing modules. This project is for these savages (wink wink).

DPM downloads the desired package, when using `dpm install <modulename>` from [deno.land/x](https://deno.land/x) and stores it within the `deno_modules` directory, while managing all your dependencies inside the `deps.json` file, in your project root.

*DPM only supports TypeScript for now. I will be adding JS support once I have completed all other TODOs and have time*

## Installing
**Please do not install DPM yet. It's still in development. Contributions are welcome.**

To install DPM, you'll need to give it `allow-net`, `allow-run`, `allow-read` and `allow-write` permissions
```shell script
deno install --allow-net --allow-read --allow-write --allow-run https://deno.land/x/dpm/mod.ts
```

## Usage
### Create a project
```shell script
dpm init
```
This will create a new Deno project with `deps.json` and `deno_modules/` dir.

### Installing modules
Before installing, make sure the module has a `mod.ts` file where it exports all of it's required types, functions, etc. Modules without a `mod.ts` are not supported.

```shell script
dpm i <module_name>
```

###### In the future, we might support modules without `mod.ts`. Please open an issue if you want to share your idea on an ideal implementation!

## TODO List
- [ ] Add `deno i` without module arguments to install from `deps.json`
- [ ] Add multiple module install support to `deno i`
- [ ] Add version support for `deno i` based on github release tags
- [ ] Add `deno r`/`deno remove` command
- [ ] Add `deno update` command for updating modules to their latest version
- [ ] Add `deno run` command for running scripts
- [ ] Add optional `require('module-name')` function
- [ ] Add JavaScript support

### V2
Right now, dpm DPM is a simple package manager relying on the deno website repo's database.json file, to fetch modules. DPM v2 will be a standalone package manager, with it's own registry, based on github. This is a future plan, and I am not working on this at the moment.

## Contributing
Contributions are welcome, since this is a huge project with a lot to do. Please make a pull request, if you have something to share!