import * as core from '@actions/core'
import { run } from '../src/main'
describe('When runing the action',()=>{
  const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>
  
})