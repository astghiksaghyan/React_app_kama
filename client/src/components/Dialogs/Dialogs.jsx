import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = ({dialogsData}) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsData.map((dialogData) => {
                return <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={`/dialogs/${dialogData.id}`}>{dialogData.name}</NavLink>
                </div>;
            })}
        </div>
        <div className={s.messages}>
            <div className={s.message}>
                Hi
            </div>
            <div className={s.message}>
                How are you?
            </div>
            <div className={s.message}>
                Yo
            </div>
            <div className={s.message}>
                Bo
            </div>
        </div>
    </div>
}

export default Dialogs;