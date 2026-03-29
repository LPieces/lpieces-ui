import { makeInstaller } from '@lpieces-ui/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@lpieces-ui/theme/index.css'

library.add(fas)
const installer = makeInstaller(components)

export * from '@lpieces-ui/components'
export default installer