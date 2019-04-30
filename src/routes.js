import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import SearchRepositories from '~/pages/SearchRepositories';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      SearchRepositories,
      Issues,
    },
    {
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
