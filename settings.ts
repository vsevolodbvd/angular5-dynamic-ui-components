import { BOOTSTRAP_COMPONENTS } from './src/app/ui-bootstrap/components/index';
import { FOUNDATION_COMPONENTS } from './src/app/ui-foundation/components/index';

const BOOTSTRAP = 'Bootstrap';
const FOUNDATION = 'Foundation';

const selectedStylesProvider = BOOTSTRAP;

const stylesProviders = [
  {
    name: BOOTSTRAP,
    components: BOOTSTRAP_COMPONENTS
  },
  {
    name: FOUNDATION,
    components: FOUNDATION_COMPONENTS
  }
];

const uiComponents = () => {
  return stylesProviders.find((provider: any) => provider.name === selectedStylesProvider).components;
};

const settings = {
  stylesProvider: selectedStylesProvider,
  uiComponents: uiComponents()
};

export default settings;
