import React, { useState } from 'react';
import { addTask } from '../state/events';
import { useUnit } from 'effector-react';
import { tasksStore } from '../state/store';

function AddTask() {
    const [taskText, setTaskText] = useState('');
    const tasks = useUnit(tasksStore);

    const handleAddTask = (event) => {
        event.preventDefault();
        if (taskText.trim()) {
            const newTask = {
                id: tasks.length + 1,
                text: taskText,
                completed: false,
            };
            addTask(newTask);
            setTaskText('');
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleAddTask}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Введите новую задачу"
                className="task-input"
            />
            <button type="submit" className="add-task-button">
                Добавить задачу
            </button>
        </form>
    );
}

export default AddTask;