import { css, InterpolationValue } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

interface Media {
  desktop: (string: TemplateStringsArray) => InterpolationValue[];
  tablet: (string: TemplateStringsArray) => InterpolationValue[];
  phone: (string: TemplateStringsArray) => InterpolationValue[];
}

const media: Media = {
  desktop: (...args) => css`
    @media (max-width: ${sizes['desktop'] / 16}em) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${sizes['tablet'] / 16}em) {
      ${css(...args)};
    }
  `,
  phone: (...args) => css`
    @media (max-width: ${sizes['phone'] / 16}em) {
      ${css(...args)};
    }
  `,
};

export default media;
