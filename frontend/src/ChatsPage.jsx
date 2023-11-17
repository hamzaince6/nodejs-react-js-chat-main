import { PrettyChatWindow } from 'react-chat-engine-pretty'


const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='2ec0691c-2612-4ae8-817b-f97d1dd7e541'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
    </div>
    )
}

export default ChatsPage