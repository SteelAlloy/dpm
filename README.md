# Deno Package Manager [W.I.P.]
DPM or Deno Package Manager is an NPM like package manager for [Deno](https://deno.land). While Deno's original philosophy is to cache all of it's dependencies by downloading them via URLs, some people prefer the NodeJS way of importing modules. This project is for these savages (wink wink).

DPM downloads the desired package, when using `dpm install <modulename>` from [deno.land/x](https://deno.land/x) and stores it within the `deno_modules` directory, while managing all your dependencies inside the `deps.json` file, in your project root. DPM also generates an import map in `deno_modules/import_map.json`, so you can use the easy-import style.
```ts
import { Houston } from 'houston/mod.ts'
```

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

### Loading dependencies from a `deps.json` file
```shell script
dpm install
```

### Importing modules inside your Deno project
Importing modules differs a little from the standard Deno importing or from Node-typescript style imports. Deno's import maps feature provides a shortcut to local modules.

So if you want to import for e.g. the `oak` Deno middleware, after installing it with `dpm i oak`, you can do it the following way:
```ts
import { Router } from 'oak/mod.ts'
```
But you can also import other files from module:
```ts
import { CookiesOptions } from 'oak/cookies.ts'
```
Remember, this only works, if you are using one of the `dpm run` scripts, from `deps.json` (there are other options available). Read more about this [here](#import-maps)

## Import maps
DPM is based on Deno's import map feature. This allows the user to provide shortcuts to local (and online) modules. Let's say that you have a module in your home folder: `/home/deno_mod`. You can provide a shortcut to it, using an import map, like this:
###### import_map.json
```json
{
  "imports": {
    "mod_name/": "file:///home/deno_mod/"
  }
}
```
Now you will be able to use an import with a shortcut:
###### mod.ts
```ts
import { AnInstanceFromYourMod } from 'mod_name/mod.ts'
```
Remember to add the extra flags to get the import map working:

```shell script
deno run --importmap=import_map.json --unstable mod.ts
```

### Why is this important for DPM users?
We use import maps, to provide an easy-import style for the users. **If you want to create your own script in `deps.json` or you want to run your project with `deno run`, you need to add the import map to it.**

###### Running with `deno run`
```shell script
deno run --importmap=deno_modules/import_map.json --unstable mod.ts
```

More about import maps in the [Deno documentation](https://deno.land/manual/linking_to_external_code/import_maps)

## TODO List
- [x] Add `deno i` without module arguments to install from `deps.json`
- [x] Add multiple module install support to `deno i`
- [ ] Add version support for `deno i` based on github release tags
- [x] Add auto-generating import maps
- [ ] Make `dpm init` to add the `--importmap=<IMPORTMAP_FILE>` and the `--unstable`(temporary, until it becomes stable) flags to the `dpm run` scripts in `deps.json`
- [ ] Add `deno r`/`deno remove` command
- [ ] Add `deno update` command for updating modules to their latest version
- [ ] Add `deno run` command for running scripts
- [x] Add support for modules without `mod.ts` file
- [ ] Add optional `require('module-name')` function
- [ ] Cleanup code
- [ ] Add JavaScript support

### V2
Right now, dpm DPM is a simple package manager relying on the deno website repo's database.json file, to fetch modules. DPM v2 will be a standalone package manager, with it's own registry, based on github. This is a future plan, and I am not working on this at the moment.

## Contributing
Contributions are welcome, since this is a huge project with a lot to do. Please make a pull request, if you have something to share!