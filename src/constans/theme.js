export const theme = {
  font: { body: 'Open Sans,  sans-serif' },
  //          0   1   2   3   4   5   6   7   8
  fontSize: [16, 18, 20, 26, 28, 32, 35, 40, 55],

  fontWeight: { regular: 400, semiBold: 600 },

  colors: {
    green: '#28A745',
    blue: '#0284D0',
    blackFont: '#333333',
    whiteFont: '#FFFFFF',
  },

  media: {
    mobile: '(min-with: 320px)',
    tablet: '(min-with: 768px)',
    desktop: '(min-with: 1360px)',
  },
};

// font-family: ${p => p.theme.font.body};
// font-size: ${p => p.theme.fontSize[4]}px;
// font-weight: ${p => p.theme.fontWeight.regular};
// font-style: normal;
// line-height: 1.36;

// color: ${p => p.theme.colors.white}
// margin-left
//margin-top

// transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
