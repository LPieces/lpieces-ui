import { makeInstaller } from '@lpieces-ui/utils'
import components from './components'

const installer = makeInstaller(components)

export * from '@lpieces-ui/components'
export default installer