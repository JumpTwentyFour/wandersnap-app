export function animatedStyle(index, animatedValue) {
  return {
    opacity: animatedValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    }),
  }
}
