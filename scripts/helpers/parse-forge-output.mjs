import fs from 'fs'

const output = fs.readFileSync(process.argv[2], 'utf-8')
const [simulation, execution, conditions, error, success] = output.split('==========================')

if (success) {
  const id = execution.split('\n').at(-4).slice(18).trim()
  console.log(id)
} else {
  process.exit(1)
}
