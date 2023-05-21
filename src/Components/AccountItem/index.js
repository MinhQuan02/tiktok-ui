import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e50e0e52f9b0d59eb750605ba54b58d8~c5_100x100.jpeg?x-expires=1684224000&x-signature=uai5%2Bh6UyEQLIk%2FRU3zLUEuCpqg%3D"
                alt="Account"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
