import {FilterValues, Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (id: number) => void
    changeFilter: (filter: FilterValues) => void
}
export const ShoppingList = (props: Props) => {
    const {title, tasks, date, deleteTask, changeFilter} = props
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <input/>
                <Button title={'+'} />
            </div>
            {tasks.length === 0 ? (
                <p>Nulla da prendere</p>
            ) : (
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.completed}/>
                            <span>{task.title}</span>
                            <Button title={'x'} onClick={() => deleteTask(task.id)} />
                        </li>
                    )
                })}

            </ul>
                )}
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')} />
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
            <div>{date}</div>

        </div>
    );
};