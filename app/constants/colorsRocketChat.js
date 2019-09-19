import { isIOS } from '../utils/deviceInfo';

//Important colors and colors for status symbols(i.e online /offline)
export const COLOR_WHITE = '#fff';
export const COLOR_PRIMARY = '#1d74f5';
export const COLOR_DANGER = '#f5455c';
export const COLOR_SUCCESS = '#2de0a5';
export const TRANSPARENT = '#00000000';
export const STATUS_COLORS = {
	online: '#2de0a5',
	busy: COLOR_DANGER,
	away: '#ffd21f',
	offline: '#cbced1'
};


//colors relating to most text and titles
export const COLOR_TITLE = '#0C0D0F';
export const COLOR_TITLE_HEADER_BUTTON = isIOS ? COLOR_PRIMARY : COLOR_WHITE;
export const COLOR_TEXT = '#2F343D';
export const COLOR_TEXT_DESCRIPTION = '#9ca2a8';
export const COLOR_TYPING = isIOS ? COLOR_TEXT_DESCRIPTION : COLOR_WHITE;
export const COLOR_UNREAD = '#e1e5e8';

//Colors related to header/ status bar
export const HEADER_BACKGROUND = isIOS ? '#f8f8f8' : '#2F343D';
export const HEADER_TITLE = isIOS ? COLOR_TITLE : COLOR_WHITE;
export const HEADER_BACK = isIOS ? COLOR_PRIMARY : COLOR_WHITE;
export const HEADER_GRADIENT = null;

//Colors relating to buttons
export const COLOR_BUTTON_PRIMARY = COLOR_PRIMARY;
export const COLOR_BUTTON_PRIMARY_LOGIN = COLOR_BUTTON_PRIMARY; // for login buttons only
export const COLOR_BUTTON_SECONDARY = COLOR_WHITE;
export const COLOR_BUTTON_SECONDARY_LOGIN = COLOR_WHITE; //for login buttons only
export const COLOR_BUTTON_TEXT_PRIMARY = COLOR_WHITE;
export const COLOR_BUTTON_TEXT_PRIMARY_LOGIN = COLOR_WHITE;
export const COLOR_BUTTON_TEXT_SECONDARY = COLOR_BUTTON_PRIMARY;
export const COLOR_BUTTON_TEXT_SECONDARY_LOGIN = COLOR_BUTTON_PRIMARY;

//Colors relating to backgrounds and borders
export const COLOR_BACKGROUND_CONTAINER = '#f3f4f5';
export const COLOR_BACKGROUND_LIST = COLOR_WHITE;
export const COLOR_BACKGROUND_CONTAINER_PRIMARY = COLOR_WHITE;
export const LOADING_SCREEN_BACKGROUND = COLOR_WHITE;
export const COLOR_SEPARATOR = '#A7A7AA';
export const COLOR_BORDER = '#e1e5e8';
export const COLOR_BORDER_SECONDARY = COLOR_WHITE;
export const COLOR_TOAST = '#0C0D0F';
export const COLOR_LOADING = 'rgba(255,255,255,.2)';

//Colors related to drop down sort tab for roomslist
export const COLOR_DROPDOWN_CONTAINER_HEADER = isIOS ? COLOR_WHITE : '#54585E';//sort bar for chat channels
export const COLOR_BUTTON_DISABLED = 'rgba(65, 72, 82, 0.7)';
export const COLOR_ROOMS_ACTION_BUTTON = '#fc0abb';
export const COLOR_GROUP_TITLE_CONTAINER = isIOS ? COLOR_WHITE : '#9ea2a8';
export const COLOR_GROUP_TITLE = isIOS ? COLOR_TEXT : '#54585E';
export const COLOR_GROUP_SORT_ICON = COLOR_TEXT_DESCRIPTION;
export const COLOR_GROUP_SORT_ICON_HEADER = COLOR_TEXT_DESCRIPTION;
export const COLOR_SAFE_AREA_BACKGROUND = isIOS ? '#F7F8FA' : '#E1E5E8';
export const COLOR_SEARCHBOX_CONTAINER = isIOS ? '#F7F8FA' : '#54585E';
export const COLOR_SEARCHBOX_BACKGROUND = '#E1E5E8';
export const COLOR_SEARCHBOX_TEXT = '#8E8E93';
export const COLOR_TEXT_INPUT_BACKGROUND = COLOR_WHITE;
export const COLOR_TEXT_HEADER = isIOS ? COLOR_TEXT_DESCRIPTION : COLOR_WHITE;
export const COLOR_TEXT_DROPDOWN_CONTAINER = COLOR_TEXT_DESCRIPTION;
export const COLOR_ITEM_CURRENT = '#E1E5E8';

//Colors related to linked users / items in chat
export const COLOR_MENTIONED_USER = '#0072FE';
export const COLOR_BACKGROUND_MENTIONED_USER = '#E8F2FF';
export const COLOR_MENTIONED_LOGGED_USER = COLOR_WHITE;
export const COLOR_BACKGROUND_MENTIONED_LOGGED_USER = COLOR_PRIMARY;
export const COLOR_MENTIONED_USER_ALL = COLOR_WHITE;
export const COLOR_BACKGROUND_MENTIONED_USER_ALL = '#FF5B5A';
export const COLOR_LINK = COLOR_PRIMARY;
export const COLOR_REPLIED_THREAD = COLOR_PRIMARY;
export const COLOR_MESSAGE_THREAD = COLOR_PRIMARY;
export const COLOR_MESSAGE_THREAD_TEXT = COLOR_WHITE;
export const COLOR_LINK_TITLE = COLOR_PRIMARY;
export const COLOR_REACTIONS = COLOR_PRIMARY;
export const COLOR_REACTIONS_COUNT = COLOR_PRIMARY;
export const COLOR_KEYBOARD_ICONS = COLOR_PRIMARY;

//colors in profile view
export const COLOR_AVATAR_BUTTON = '#e1e5e8';
export const COLOR_DIALOG_INPUT = 'rgba(0,0,0,.15)';

//login related
export const COLOR_LOGIN_BUTTON_TEXT = COLOR_TITLE
export const COLOR_LOGIN_BACKGROUND_GRADIENT_START = COLOR_WHITE
export const COLOR_LOGIN_BACKGROUND_GRADIENT_END = COLOR_WHITE
export const COLOR_LOGIN_CONTAINER_BACKGROUND = COLOR_WHITE
export const COLOR_LOGIN_TEXT_BACKGROUND = TRANSPARENT
export const COLOR_LOGIN_TEXT_BORDER = TRANSPARENT
export const COLOR_LOGIN_SERVICE_TEXT = COLOR_TEXT