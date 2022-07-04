/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.scoped.scss';

type ImagelazyProps = {
    src: string;
    alt?: string;
    width: number | string;
    height: number | string;
};

const ImageLazy: FC<ImagelazyProps> = ({ src, alt, width, height }) => (
    <div
        style={{ width: width + 'px', height: height + 'px' }}
        className="lazyload-wrapper"
    >
        <LazyLoadImage
            alt={alt}
            key={src}
            placeholder={
                <div className="image-cover">
                    <img
                        src={
                            require('@/assets/images/home/video-player-bg.png')
                                .default
                        }
                        alt={alt}
                    />
                </div>
            }
            src={src}
        />
    </div>
);

export default memo(ImageLazy);
