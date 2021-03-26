import { NextRouter } from 'next/router'

export const whichRouteHighlight = (indexToTabName: { [key: string]: number }, router: NextRouter) => {
  const routeExists = router.route in indexToTabName
  if (routeExists) return indexToTabName[router.route]
  return 10
}