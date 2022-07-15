/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, memo, HTMLAttributes, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import classnames from 'classnames';
import loadImage from '@/utils/loadImage';
import defaultImage from '@/assets/images/icon/bg-logo-icon.svg';

interface ImagelazyProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    imageClassName?: string | undefined;
    boxClassName?: string | undefined;
    iconClasssName?: string | undefined;
    boxIconClassName?: string | undefined;
}

interface PlaceholderProps {
    iconClasssName?: string | undefined;
    boxIconClassName?: string | undefined;
}
const Placeholder = ({
    iconClasssName = 'w-[80px]',
    boxIconClassName = 'w-full h-full rounded-[8px]',
}: PlaceholderProps) => (
    <div
        className={classnames(
            'bg-[#423F3A] flex justify-center items-center',
            boxIconClassName,
        )}
    >
        <img src={defaultImage} alt="" className={iconClasssName} />
    </div>
);

const ImageLazy: FC<ImagelazyProps> = ({
    src,
    alt,
    imageClassName,
    boxClassName,
    iconClasssName,
    boxIconClassName,
}) => {
    const [loadFail, setLoadFail] = useState(true);

    const imagePromise = () => {
        loadImage(src)
            .then(() => {
                setLoadFail(false);
            })
            .catch(() => {
                setLoadFail(true);
            });
    };

    useEffect(() => {
        if (src) {
            imagePromise();
        } else {
            setLoadFail(true);
        }
    }, [src]);

    return (
        <>
            {loadFail ? (
                <div className={classnames(boxClassName)}>
                    <Placeholder
                        iconClasssName={iconClasssName}
                        boxIconClassName={boxIconClassName}
                    />
                </div>
            ) : (
                <LazyLoad
                    className={classnames(boxClassName)}
                    placeholder={
                        <Placeholder
                            iconClasssName={iconClasssName}
                            boxIconClassName={boxIconClassName}
                        />
                    }
                >
                    <img src={src} alt={alt} className={imageClassName} />
                </LazyLoad>
            )}
        </>
    );
};

export default memo(ImageLazy);
