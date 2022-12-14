import HomeScreens from './HomeScreens';
import CategoryScreens from './CategoryScreens';
import NotificationScreens from './NotificationScreens';
import ProfileScreens from './ProfileScreens';
import ChatScreens from './ChatScreens';
import Searchscreen from './HomeScreens/navigation/SearchScreen';
import OrderHistory from './ProfileScreens/navigation/OrderHistory';
import OrderDetails from './ProfileScreens/navigation/OrderDetails';
import ProgrammingAccountScreen from './ProfileScreens/navigation/ProgrammingAccountScreen';
import SecurityScreen from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/SecurityScreen';
import TermOfUseScreen from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/TermOfUseScreen';
import IntroduceScreen from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/IntroduceScreen';
import IntroduceDetail from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/IntroduceScreen/navigation/IntroduceDetails';
import ChatBox from './ChatScreens/navigation/ChatBoxScreen';
import ListProducts from './HomeScreens/navigation/ListProducts';
import MyselfInformation from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/MyselfInformation';
import FavoriteScreen from './ProfileScreens/navigation/FavoriteScreen';
import ViewedProductScreen from './ProfileScreens/navigation/ViewedProductScreen';
import ChooseProvince from './HomeScreens/navigation/ListProducts/navigation/ChooseProvince';
import ChooseCategory from './HomeScreens/navigation/ListProducts/navigation/ChooseCategory';
import MyRating from './ProfileScreens/navigation/MyRating';
import MyVouchers from './ProfileScreens/navigation/MyVouchers';
import DetailedNotice from './NotificationScreens/navigation/DetailedNotice';
import SalesInformationSettings from './ProfileScreens/navigation/StartSelling/navigation/SalesInformationSettings';
import StartSelling from './ProfileScreens/navigation/StartSelling';
import Addressing from './ProfileScreens/navigation/StartSelling/navigation/Addressing';
import SystemNotifications from './NotificationScreens/components/TopTabScreens/SystemNotifications';
import PurchaseNotice from './NotificationScreens/components/TopTabScreens/PurchaseNotice';
import DiscountProducts from './HomeScreens/navigation/DiscountProducts';
import SearchByKeyWordScreen from './HomeScreens/navigation/SearchScreen/navigation/SearchByKeyWordScreen';

export const bottom = {
  HOMESCREENS: HomeScreens,
  CATEGORYSCREENS: CategoryScreens,
  NOTIFICATIONSCREENS: NotificationScreens,
  PROFILESCREENS: ProfileScreens,
  CHATSCREENS: ChatScreens,
  SEARCHSCREEN: Searchscreen,
  ORDERHISTORY: OrderHistory,
  ORDERDETAILS: OrderDetails,
  PROGRAMMING_ACCOUNT_SCREEN: ProgrammingAccountScreen,
  SECURITY_SCREEN: SecurityScreen,
  TERM_OF_USE_SCREEN: TermOfUseScreen,
  INTRODUCE_SCREEN: IntroduceScreen,
  INTRODUCE_DETAIL: IntroduceDetail,
  CHATBOX: ChatBox,
  LIST_PRODUCTS: ListProducts,
  MYSELFINFOMATION: MyselfInformation,
  FAVORITE_SCREEN: FavoriteScreen,
  VIEW_PRODUCTS: ViewedProductScreen,
  CHOOSE_PROVICE: ChooseProvince,
  CHOOSE_CATEGORY: ChooseCategory,
  MY_RATING: MyRating,
  MY_VOUCHERS: MyVouchers,
  DETAILED_NOTICE: DetailedNotice,
  START_SELLING: StartSelling,
  SALE_INFORMATION_SETTINGS: SalesInformationSettings,
  ADDRESSING: Addressing,
  SYSTEM_NOTIFICATIONS: SystemNotifications,
  PURCHASE_NOTICE: PurchaseNotice,
  DISCOUNT_PRODUCTS: DiscountProducts,
  SEARCH_BY_KEYWORD_SCREEN: SearchByKeyWordScreen,
};
