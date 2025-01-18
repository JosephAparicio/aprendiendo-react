import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initialIsFollowing: false
    },
    {
        userName: 'ibaillanos',
        name: 'Ibai Llanos',
        initialIsFollowing: true
    }
]

export function App(){
    return(
        <section className='App'>
            {
                users.map(({userName, name, initialIsFollowing}) => (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={initialIsFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}