import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = ({dialogsData}) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsData.map((dialog) => {
                return <div className={s.dialog + ' ' + s.active} key={dialog.id}>
                    <NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
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