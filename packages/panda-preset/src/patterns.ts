import type { PatternConfig } from '@pandacss/types'

export function definePattern<T extends PatternConfig>(config: T) {
  return config
}

const scrollable = definePattern({
  description: 'A container that allows for scrolling',
  properties: {
    // The direction of the scroll
    direction: { type: 'enum', value: ['horizontal', 'vertical'] },
    // Whether to hide the scrollbar
    hideScrollbar: { type: 'boolean' },
  },

  // disallow the `overflow` property (in TypeScript)
  blocklist: ['overflow'],

  transform(props) {
    const { direction, hideScrollbar, ...rest } = props
    return {
      overflow: 'auto',
      height: direction === 'horizontal' ? '100%' : 'auto',
      width: direction === 'vertical' ? '100%' : 'auto',
      scrollbarWidth: hideScrollbar ? 'none' : 'auto',
      WebkitOverflowScrolling: 'touch',
      '&::-webkit-scrollbar': {
        display: hideScrollbar ? 'none' : 'auto',
      },
      ...rest,
    }
  },
})

const animateIn = definePattern({
  description: 'A container that fades in the content',
  properties: {
    // The delay of the animation
    delay: { type: 'string' },
  },

  // disallow the `overflow` property (in TypeScript)
  blocklist: ['overflow'],

  transform(props) {
    const { delay, ...rest } = props
    return {
      animationName: 'fadeIn',
      animationDuration: '2s',
      animationFillMode: 'forwards',
      animationDelay: delay ?? '200ms',
      opacity: '0',
      ...rest,
      _motionReduce: {
        animationName: 'none',
      },
    }
  },
})

export const patterns = {
  extend: {
    animateIn,
    scrollable,
  },
}
