import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const formatUsername = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} userName="ibaillanos" name="Ibai Llanos"/>
            <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="midudev" name="Miguel Ángel Durán" />
        </section>
    )
}