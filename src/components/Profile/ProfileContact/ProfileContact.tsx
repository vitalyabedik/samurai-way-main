type ContactPropsType = {
    title: string
    value: string | null
}

export const Contact = ({title, value}: ContactPropsType) => {
    return <div><b>{title}</b>: {value}</div>
}