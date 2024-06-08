import basicInfo from './basicInfo.js';
import servers from './servers.js';
import tags from './tags.js';
import components from './components.js';
import paths from './paths/user/index.js';

const options = {
  definition: {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...paths,
  },
  apis: ['./routes/*.js'],
};

export default options;
