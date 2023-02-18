export const Li = ({address, email}) => {
    return (<>
        <li style={{
            margin: '2px 0 0 0',
            padding: '2px 5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '1px solid',
            borderRadius: '6px'
        }}>
            <span>city: {address?.city}</span>
            <span>email: {email}</span>
        </li>
    </>)
}