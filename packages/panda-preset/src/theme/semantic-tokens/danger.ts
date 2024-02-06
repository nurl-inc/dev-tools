import { defineSentiment } from './index'

export const dangerTokens = defineSentiment({
  danger: {
    bg: {
      initial: {
        value: {
          _nurlTheme: {
            base: '#FF0000',
            _lightMode: '#FF0000',
            _darkMode: '#FF0000',
          },
        },
      },
      hover: {
        value: {
          _nurlTheme: {
            base: '#8B0038',
            _lightMode: '#8B0038',
            _darkMode: '#8B0038',
          },
        },
      },
      active: {
        value: {
          _nurlTheme: {
            base: '#5C0026',
            _lightMode: '#5C0026',
            _darkMode: '#5C0026',
          },
        },
      },
    },

    border: {
      initial: {
        value: {
          _nurlTheme: {
            base: '#FF0000',
            _lightMode: '#FF0000',
            _darkMode: '#FF0000',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _nurlTheme: {
            base: '#5C0026',
            _lightMode: '#FFD0E3',
            _darkMode: '#5C0026',
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _nurlTheme: {
            base: '#FFF0F6',
            _lightMode: '#5C0026',
            _darkMode: '#FFF0F6',
          },
        },
      },
      inverse: {
        value: {
          _nurlTheme: {
            base: '#FFF0F6',
            _lightMode: '#F4F7FA',
            _darkMode: '#FFF0F6',
          },
        },
      },
      100: {
        value: {
          _nurlTheme: {
            base: '#FFA2C8',
            _lightMode: '#B9004B',
            _darkMode: '#FFA2C8',
          },
        },
      },
      200: {
        value: {
          _nurlTheme: {
            base: '#FF73AC',
            _lightMode: '#E7005E',
            _darkMode: '#FF73AC',
          },
        },
      },
    },
  },
})
