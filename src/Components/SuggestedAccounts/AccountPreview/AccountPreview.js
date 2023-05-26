import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/340884521_1198924170814520_5575707358682414546_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BONBqXuBFtoAX-FLG5_&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBzsFIpNSRhi17SLjqvj1CebzFQj5DlPLnTr2cxBksJ_g&oe=646D4261"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>leminhquan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Le Minh Quan</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.5M</strong>
                    <span className={cx('label')}>Follow</span>
                    <strong className={cx('value')}>8.5M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
