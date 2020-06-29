'use stric'

const list = [
  { id: 1, task: 'Leer' },
  { id: 2, task: 'Read' },
  { id: 3, task: 'Wash' },
  { id: 4, task: 'Run' }
]

const render = () => {
  return list.map(item => {
      console.log(`Task:` + item.task );
  })
}

render()
