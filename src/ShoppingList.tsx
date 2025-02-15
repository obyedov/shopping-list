import {Task} from "./App.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
}
export const ShoppingList = (props: Props) => {
    const {title, tasks, date} = props
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <input/>
                <button>+</button>
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
                        </li>
                    )
                })}

            </ul>
                )}
            <div>{date}</div>

        </div>
    );
};