// Imports
import temp_history from '../Images/temp_history.png'
import HistoryController from '../../Controller/HistoryController.js'

function HistoryButton() {

    return(
        <button>
            <img alt="History" src={temp_history} onClick={HistoryController}/>
        </button>
    )
}

export default HistoryButton