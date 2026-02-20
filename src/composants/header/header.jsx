//Composant pour afficher l'en-tête de l'application
import styles from './header.module.css';
import reactLogo from '../../assets/react.svg'
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-8 h-8 text-blue-800"
  viewBox="0 0 576 512"
  fill="currentColor"
>
  <path d="M528 64h-88V56c0-30.9-25.1-56-56-56H192c-30.9 0-56 25.1-56 56v8H48C21.5 64 0 85.5 0 112v48C0 168.8 7.2 176 16 176h64v280c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V176h64c8.8 0 16-7.2 16-16v-48c0-26.5-21.5-48-48-48zM192 56h192v8H192v-8zM464 424c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V184h352v240z"/>
</svg>

                <div>
                    <h1>Task Manager</h1>
                    <div className='color-gray'>
                        <code>Planifiez tes tâches journalières et faites le suivi.</code>
                    </div>
                </div>
            </div>
            <code className='color-primary'>
                v.1.0
            </code>
        </div>
    ); 
};