type Props = {
    title: string,
    onClick?: () => void,
}

export const Button = ({title, onClick}: Props) => {
    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    );
};