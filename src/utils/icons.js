import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faEnvelope,
  faMapMarkerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const init = () =>
  library.add(
    faCode,
    faEnvelope,
    faGithub,
    faLinkedin,
    faMapMarkerAlt,
    faMedium,
    faTwitter,
    faUsers
  );
