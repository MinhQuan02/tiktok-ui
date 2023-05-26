import classNames from 'classnames/bind';
import styles from './SlideBar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/Components/Icons';
import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);

function SlideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following account" />
        </aside>
    );
}

export default SlideBar;
