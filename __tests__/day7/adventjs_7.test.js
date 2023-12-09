import { expect, test } from 'vitest'
import { drawGift } from '../../day7/adventjs_7'

test('Reto 7: las cajas en 3D', () => {
  expect(drawGift(4, '+')).toBe(
    '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n'
  )
  expect(drawGift(5, '*')).toBe(
    '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n'
  )
  expect(drawGift(1, '^')).toBe('#\n')
  expect(drawGift(2, '&')).toBe(' ##\n###\n##\n')
})
