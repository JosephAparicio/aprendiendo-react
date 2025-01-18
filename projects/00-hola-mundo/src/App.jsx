import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUsername={format} 
                isFollowing={false} 
                userName="ibaillanos" 
                name="Ibai Llanos"
            />
            <TwitterFollowCard 
                formatUsername={format} 
                isFollowing 
                userName="midudev" 
                name="Miguel Ángel Durán" 
            />
        </section>
    )
}