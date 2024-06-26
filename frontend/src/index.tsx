import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// import LandingPage from './components/Landing';
import RecipesIndex from './components/Recipes/Index'
import TestIndex from './components/Tests/Index';
import LandingPage from './components/Landing/LandingPage';

const router = createHashRouter([
	{
		path: '/',
		Component: LandingPage,
	},
	{
		path: '/recipes',
		Component: RecipesIndex,
	},
	{
		path: '/test',
		Component: TestIndex,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
