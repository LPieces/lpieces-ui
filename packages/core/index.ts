import { makeInstaller } from '@lpieces-ui/utils'
import components from './components'
import '@lpieces-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@lpieces-ui/components'
export default installer