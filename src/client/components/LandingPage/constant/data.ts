import {
    SportSoccer,
    DevicesMacbookAndIphone, 
    DevicesTvBox,
    MailSendRight,
    ChartRelation,
    FilesText,
    TextTable,
    SportBasketball,
    SportTableTennis,
    SportBaseball,
    SportRugby,
    SportAmericanFootball,
    SportDarts,
    SportHandball,
    SportBeachVolleyball,
    SportFieldHockey,
    SportSportsbet
} from '@heathmont/moon-icons-tw';
import basketball from '../../../../assets/basketBall.png';
import elfCup from '../../../../assets/eflCup.png';
import manUrd from '../../../../assets/manUrd.png';
import topPlayer from '../../../../assets/top.png';
import imageOne from '../../../../assets/bet1.png';
import imageTwo from '../../../../assets/bet2.png';
import imageThree from '../../../../assets/bet3.png';
import imageFour from '../../../../assets/bet4.png';
import imageFive from '../../../../assets/bet5.png';
import imageSix from '../../../../assets/bet6.png';


export const POPULAR_DATA = [
    "Today's Fooball",
    "Upcoming Games",
    "English Premier League",
    "Bundesliga",
    "Laliga",
    "Seria A"
]

export const MOBILE_POPULAR_DATA = [
    'MY FAVOURITES',
    "TODAY'S FOOTBALL",
    "FOOTBALL IN THE NEXT 3 HRS",
    "ENGLISH PREMIER LEAGUE",
    "SPAIN LALIGA",
    "ITALY SERIE A",
    "GERMAN BUNDESLIGA",
    "FRANCE LIGUE 1",
    "CHAMPIONS LEAGUE",
    "EUROPA LEAGUE",
    "CONFRERENCE LEAGUE",
    "COPA LIBERTADOERS",
    "BRAZIL SERIE A",
    "NBA",
    "ATP 1000 PARIS"

]

export const ADVERT_CAROUSEL_IMAGE = [
    imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix
]
export const POPULAR_CAROUSEL_IMAGE = [
    basketball, elfCup, manUrd, topPlayer
]

export const SPORT_BET_CATEGORY = [
    {title: 'Sports', icon:  SportSoccer},
    {title: 'Live', icon: DevicesMacbookAndIphone},
    {title: 'SportTv', icon: DevicesTvBox},
    {title: 'Games', icon: MailSendRight },
    {title: 'Load Code', icon: ChartRelation},
    {title: 'LegitXNews', icon: FilesText},
    { title: 'Basketball', icon: SportBasketball },
    { title: 'Tennis', icon: SportTableTennis },
    {title: 'Baseball', icon: SportBaseball},
    { title: 'Rugby', icon: SportRugby },
    {title: 'Ice Hockey', icon: SportFieldHockey},
    {title: 'Volleyball', icon: SportBeachVolleyball},
    {title: 'Darts', icon: SportDarts},
    {title: 'Handball', icon: SportHandball},
    {title: 'American Football', icon: SportAmericanFootball },
    { title: 'Esports Football', icon: SportSportsbet },
    {title: 'Result', icon: TextTable},
]