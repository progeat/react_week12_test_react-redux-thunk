import styles from './app.module.css';
import { ControlPanel, User } from './components';

export const App = () => {
	return (
		<div className={styles.app}>
			<User />
			<ControlPanel />
		</div>
	);
};
