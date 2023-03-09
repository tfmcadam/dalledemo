import styles from './LoadingSpinner.css';


export const LoadingSpinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.loadingSpinner}></div>

        </div>

    )
}