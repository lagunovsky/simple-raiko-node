const [simulation, execution, conditions, error, success] = process.argv[2].split('==========================')

if (success) {
  const id = execution.split('\n').at(-4).slice(18).trim()
  console.log(id)
} else {
  process.exit(1)
}
