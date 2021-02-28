// Imports
import temp_settings from '../Images/temp_settings.jpg'
import SettingsController from '../../Controller/SettingsController'

function SettingsButton() {
    return(
        <button>
            <img alt="Settings" src={temp_settings} onClick={SettingsController}/>
        </button>
    )
}

export default SettingsButton