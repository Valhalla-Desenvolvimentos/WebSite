export const containerVariants = (delay = 0) => ({
  "offscren": {
    opacity: 0,
    y: 30
  },
  "onscreen": {
    opacity: 1,
    y: 30,
    transition: {
      type: 'spring',
      duration: 2,
      delay
    }
  }
})

export const tagVariants = {
  "offscren": {
    opacity: 0,
    y: 10
  },
  "onscreen": {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2,
    }
  }
}

export const titleVariants = {
  "offscren": {
    opacity: 1,
    y: 30
  },
  "onscreen": {
    opacity: 10,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
    }
  }
}

export const desVariants = {
  "offscren": {
    opacity: 1,
    y: 20
  },
  "onscreen": {
    opacity: 10,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.6,
      delay: .2
    }
  }
}