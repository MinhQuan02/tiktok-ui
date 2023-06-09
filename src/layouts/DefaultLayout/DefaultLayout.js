import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/Components/Header/Header';
import SlideBar from '~/layouts/Components/SlideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SlideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
