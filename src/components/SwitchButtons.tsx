import type { ButtonsType } from '../types'
import './SwitchButtons.css'

export function SwitchButtons({ view, setView}:ButtonsType) {
    return (
        <div className='switch-buttons-container'>
            <button 
            className={view === 'current' ? 'active-button' : 'inactive-button'}
            onClick={() => setView('current')}>Current</button>
            <button 
            className={view === 'hourly' ? 'active-button' : 'inactive-button'}
            onClick={() => setView('hourly')}>Hourly</button>
            <button 
            className={view === 'daily' ? 'active-button' : 'inactive-button'}
            onClick={() => setView('daily')}>Daily</button>
        </div>
    )

}