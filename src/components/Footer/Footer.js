import {BsGithub} from 'react-icons/bs';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footer__data}>
        © 2022 | All Rights Reserved | Developed by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/HryhoriiAndriiets1974'
          >
            <BsGithub className={css.footer__icon} />
          </a>
      </div>
    </footer>
  )
}
