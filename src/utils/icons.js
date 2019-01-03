import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faMapMarkerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

export const init = () =>
  library.add(
    faEnvelope,
    faGithub,
    faLinkedin,
    faMapMarkerAlt,
    faTwitter,
    faUsers
  )
