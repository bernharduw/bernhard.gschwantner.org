import Image from 'gatsby-image';
import styled from 'styled-components';

// The image placeholder will only be blurred if the `blur` flag is set.
// Otherwise also traced SVG images would be blurred, which is not desirable.
const ImageWithBlur = styled(Image).attrs(props => ({
  placeholderClassName: 'blurred-placeholder',
  imgStyle: {
    objectPosition: props.objectPosition || 'center center',
  },
  imgClassName: 'image',
}))`
  ${({ height }) => (height ? `height: ${height};` : '')};

  ${({ blur }) =>
    blur
      ? `
          & .blurred-placeholder {
            filter: blur(
              12px
            ); // 12px is a good compromise for blurring the placeholder.
          }
        `
      : ''};

  ${({ innerShadow }) =>
    innerShadow
      ? `
          &:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            box-shadow: 0 0 24px inset rgba(0, 0, 0, 0.1);
          }
        `
      : ''};
`;

export default ImageWithBlur;
