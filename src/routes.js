import App from './components/App'
import WishListView from './components/wishlist/WishListView'

const routes = [
  {
    path: '/wishlists',
    component: WishListView
  },
  {
    path: '*',
    component: App,
    exact: true
  }
]

export default routes
