/*
 * Copyright (c) 2020 · Marton Lederer
 * This file was created / generated by Marton Lederer
 * See the LICENSE on the github repo
 * https://github.com/MartonDev
 * https://marton.lederer.hu
 */

import { BaseCommand } from '../../deps.ts'

export class InstallCommand extends BaseCommand {

  constructor () {

    super()

    this.description('Install a module from deno.land/x or the given url')
      .arguments('<module:Module>')
      .useRawArgs()
      .action(async (options, module: string) => {

        await this.runCommand(module)

      })

  }

  async runCommand (module: string | undefined) {

    switch (typeof module) {

      case 'string':
        console.log(`Install ${ module }`)
        break

      case 'undefined':
        console.log('Installing via package file')
        break

      default:
        console.log('Something went wrong')

    }

  }

}