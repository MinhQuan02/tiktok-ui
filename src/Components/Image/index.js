import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleErrorImage = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallBack || src}
            {...props}
            onError={handleErrorImage}
        />
    );
});

export default Image;
