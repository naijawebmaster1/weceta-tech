import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export class MyImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: 'not-loaded'
        };
    }

    beforeLoad = () => {
        this.setState({
            className: 'loading'
        });
    };

    afterLoad = () => {
        this.setState({
            className: 'loaded'
        });
    };

    render() {
        const { src, width, height, alt } = this.props;
        const { className } = this.state;

        return (
            <LazyLoadImage
                afterLoad={this.afterLoad}
                height={height}
                width={width}
                alt={alt}
                delay={10}
                placeholder={
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <section>
                            {' '}
                            <Skeleton width={'230px'} height={'140px'} />
                        </section>
                    </SkeletonTheme>
                }
                style={{ minHeight: '140px' }}
                beforeLoad={this.beforeLoad}
                className={className}
                src={src}
            />
        );
    }
}

export default MyImage;
