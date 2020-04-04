import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'https://codeyu.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

