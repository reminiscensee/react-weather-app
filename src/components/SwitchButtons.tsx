import type { ButtonsType } from '../types'
import './SwitchButtons.css'

export function SwitchButtons({ view, setView}:ButtonsType) {
    return (
        <div className='switch-buttons-container'>
            <button 
            className={view === 'current' ? 'active-button' : 'inactive-button'}
            onClick={() => setView('current')}>Current</button>
            <button 
            className={view === 'forecast' ? 'active-button' : 'inactive-button'}
            onClick={() => setView('forecast')}>Hourly</button>
        </div>
    )

}