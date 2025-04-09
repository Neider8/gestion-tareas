import { useState, useEffect } from 'react'

export default function TaskForm({ addTask, editingTask, updateTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  })

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask)
    }
  }, [editingTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.title.trim()) return
    
    if (editingTask) {
      updateTask(task)
    } else {
      addTask(task)
    }
    setTask({ title: '', description: '', completed: false })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        pattern="[A-Za-z0-9 ]{5,50}"
        required
        title="El titulo debe tener entre 5 y 50 caracteres y no puede contener caracteres especiales."
        autoFocus
        placeholder="Titulo de la tarea"
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        pattern="[A-Za-z0-9 ]{5,50}"
        required
        title="El titulo debe tener entre 5 y 50 caracteres y no puede contener caracteres especiales."
        autoFocus
        placeholder="Descripcion de la tarea (opcional)"
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  )
}