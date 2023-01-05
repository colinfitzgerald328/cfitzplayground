import Head from 'next/head'
import Image from 'next/image'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <div>
          <div className={styles.topdiv}>
            </div>
          <div className={styles.bottomdiv}>
          <ChangeHistoryIcon/>
            </div>
        </div>
      );
    }