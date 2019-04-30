import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import SearchRepositories from '~/pages/SearchRepositories';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    SearchRepositories,
    Issues,
  }),
);

export default Routes;
