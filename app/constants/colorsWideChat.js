import { isIOS } from '../utils/deviceInfo';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//WIDECHAT specific colors
export const WIDECHAT_COLOR_PRIMARY = '#008085';
export const WIDECHAT_GREEN_GRADIENT_LESS_DARK = '#0B6379';
export const WIDECHAT_GREEN_GRADIENT_LIGHT = '#26a1a1';
export const WIDECHAT_GREEN_GRADIENT_DARK = '#00528c';
export const WIDECHAT_FAB = '#00C1B7';
export const TRANSPARENT = '#00000000';

//Important colors and colors for status symbols(i.e online /offline)
export const COLOR_WHITE = '#FFFFFF';
export const COLOR_PRIMARY = WIDECHAT_COLOR_PRIMARY;
export const COLOR_DANGER = '#FF0000FF';
export const COLOR_SUCCESS = '#2FE1A8';
export const STATUS_COLORS = {
	online: COLOR_SUCCESS,
	busy: '#F33E5B',
	away: '#FDD236',
	offline: '#d9d9d9'
};

//colors relating to most text and titles
export const COLOR_TITLE = COLOR_WHITE;
export const COLOR_TITLE_HEADER_BUTTON = COLOR_TITLE;
export const COLOR_TEXT = '#000000DE';
export const COLOR_TEXT_DESCRIPTION = '#787878FF';
export const COLOR_LOGIN_TEXT = '#d1d1d1FF';
export const COLOR_TYPING = COLOR_TEXT_DESCRIPTION;
export const COLOR_UNREAD = '#5699FFFF';

//Colors related to header/ status bar
export const HEADER_BACKGROUND = '#0B6379FF';
export const HEADER_TITLE = COLOR_TITLE;
export const HEADER_BACK = COLOR_WHITE;
export const HEADER_GRADIENT = <LinearGradient colors={[WIDECHAT_GREEN_GRADIENT_LIGHT, HEADER_BACKGROUND]}
                                               style={{ flex: 1 }}
                                               start={{x: 0, y: 0}}
                                               end={{x: 0, y: 1}}/>
//Colors relating to buttons
export const COLOR_BUTTON_PRIMARY = COLOR_PRIMARY;
export const COLOR_BUTTON_PRIMARY_LOGIN = COLOR_WHITE; // for login buttons only
export const COLOR_BUTTON_SECONDARY = WIDECHAT_GREEN_GRADIENT_LIGHT;
export const COLOR_BUTTON_SECONDARY_LOGIN = TRANSPARENT; //for login buttons only
export const COLOR_BUTTON_TEXT_PRIMARY = COLOR_WHITE;
export const COLOR_BUTTON_TEXT_PRIMARY_LOGIN = WIDECHAT_GREEN_GRADIENT_LIGHT;
export const COLOR_BUTTON_TEXT_SECONDARY = COLOR_PRIMARY;
export const COLOR_BUTTON_TEXT_SECONDARY_LOGIN = COLOR_WHITE;

//Colors relating to backgrounds and borders
export const COLOR_BACKGROUND_CONTAINER = '#F2F2F2';
export const COLOR_BACKGROUND_LIST = COLOR_WHITE;
export const COLOR_BACKGROUND_CONTAINER_PRIMARY = COLOR_WHITE;
export const LOADING_SCREEN_BACKGROUND = HEADER_GRADIENT;
export const COLOR_SEPARATOR = '#E1E5E8FF';
export const COLOR_BORDER = COLOR_SEPARATOR;
export const COLOR_BORDER_SECONDARY = COLOR_WHITE;
export const COLOR_TOAST = '#d000ff';
export const COLOR_LOADING = 'rgba(255,255,255,.2)';
//Colors related to drop down sort tab for roomslist
export const COLOR_DROPDOWN_CONTAINER_HEADER = WIDECHAT_GREEN_GRADIENT_LIGHT; //sort bar for chat channels
export const COLOR_BUTTON_DISABLED = '#E1E5E8FF';
export const COLOR_ROOMS_ACTION_BUTTON = '#fc0abb';
export const COLOR_GROUP_TITLE_CONTAINER = COLOR_SEPARATOR;
export const COLOR_GROUP_TITLE = COLOR_TEXT;
export const COLOR_GROUP_SORT_ICON = COLOR_TEXT_DESCRIPTION;
export const COLOR_GROUP_SORT_ICON_HEADER = COLOR_WHITE;
export const COLOR_SAFE_AREA_BACKGROUND = '#E1E5E8';
export const COLOR_SEARCHBOX_CONTAINER = WIDECHAT_GREEN_GRADIENT_LIGHT;
export const COLOR_SEARCHBOX_BACKGROUND = COLOR_WHITE;
export const COLOR_SEARCHBOX_TEXT = '#8E8E93';
export const COLOR_TEXT_INPUT_BACKGROUND = COLOR_WHITE;
export const COLOR_TEXT_HEADER = COLOR_WHITE;
export const COLOR_TEXT_DROPDOWN_CONTAINER = COLOR_TEXT_HEADER;
export const COLOR_ITEM_CURRENT = '#E1E5E8';

//Colors related to linked users / items in chat
export const COLOR_MENTIONED_USER = WIDECHAT_GREEN_GRADIENT_LESS_DARK;
export const COLOR_BACKGROUND_MENTIONED_USER = TRANSPARENT; //transparent
export const COLOR_MENTIONED_LOGGED_USER = COLOR_WHITE;
export const COLOR_BACKGROUND_MENTIONED_LOGGED_USER = WIDECHAT_GREEN_GRADIENT_LESS_DARK;
export const COLOR_MENTIONED_USER_ALL = COLOR_WHITE;
export const COLOR_BACKGROUND_MENTIONED_USER_ALL = WIDECHAT_GREEN_GRADIENT_LESS_DARK;
export const COLOR_LINK = '#0645AD';
export const COLOR_REPLIED_THREAD = WIDECHAT_GREEN_GRADIENT_LIGHT;
export const COLOR_MESSAGE_THREAD = WIDECHAT_COLOR_PRIMARY;
export const COLOR_MESSAGE_THREAD_TEXT = COLOR_WHITE;
export const COLOR_LINK_TITLE = COLOR_TEXT;
export const COLOR_REACTIONS = COLOR_TEXT;
export const COLOR_REACTIONS_COUNT = WIDECHAT_GREEN_GRADIENT_LESS_DARK;
export const COLOR_KEYBOARD_ICONS = COLOR_TEXT;

//colors in profile view
export const COLOR_AVATAR_BUTTON = '#e1e5e8';
export const COLOR_DIALOG_INPUT = 'rgba(0,0,0,.15)';

//login related
export const COLOR_LOGIN_BUTTON_TEXT = COLOR_WHITE
export const COLOR_LOGIN_BACKGROUND_GRADIENT_START = WIDECHAT_GREEN_GRADIENT_LIGHT
export const COLOR_LOGIN_BACKGROUND_GRADIENT_END = WIDECHAT_GREEN_GRADIENT_DARK
export const COLOR_LOGIN_CONTAINER_BACKGROUND = TRANSPARENT
export const COLOR_LOGIN_TEXT_BACKGROUND = TRANSPARENT
export const COLOR_LOGIN_TEXT_BORDER = TRANSPARENT
export const COLOR_LOGIN_SERVICE_TEXT = COLOR_WHITE

//new additions

//export const BUTTON_CONTAINER_COLOR =


//Main colors
/*export const COLOR_PRIMARY_DARK = '#2F343DFF'
export const COLOR_ACCENT = '#1D74F5FF'

//Widechat colors
export const COLOR_PRIMARY = '#008085'
export const WIDECHAT_STATUSBAR = '#008085'
export const WIDECHAT_GREEN_GRADIENT_LESS_DARK = '#0B6379'
export const WIDECHAT_GREEN_GRADIENT_LIGHT = '#26a1a1'
export const WIDECHAT_GREEN_GRADIENT_DARK = '#00528c'
export const WIDECHAT_FAB = '#00C1B7'

//Text colors
export const COLOR_PRIMARY_TEXT = '#000000DE'
export const COLOR_SECONDARY_TEXT = '#787878FF'
export const COLOR_SECONDARY_TEXT_LIGHT = '#C1C1C1FF'
export const COLOR_TIMESTAMP_TEXT = '#9DA2A9FF'
export const COLOR_TIMESTAMP_TEXT_UNREAD = '#5699FFFF'
export const COLOR_LAST_MESSAGE_TEXT = '#00000099'
export const COLOR_USER_DETAILS_NAME_TEXT = '#0C0D0FFF'
export const COLOR_USER_DETAILS_USERNAME_TEXT = '#0000008B'

//user status colors
export const COLOR_USER_STATUS_ONLINE = '#2FE1A8'
export const COLOR_USER_STATUS_BUSY = '#F33E5B'
export const COLOR_USER_STATUS_AWAY = '#FDD236'
export const COLOR_USER_STATUS_OFFLINE = '#d9d9d9'

//Normal colors
export const COLOR_WHITE = '#FFFFFFFF'
export const COLOR_BLACK = '#000000FF'
export const COLOR_RED = '#FF0000FF'

//Authentication colors
export const COLOR_AUTHENTICATION_BUTTON_BORDER_AND_DIVIDER = '#E1E5E8FF'
export const COLOR_AUTHENTICATION_BUTTON_DISABLED = '#E1E5E8FF'
export const COLOR_AUTHENTICATION_CHEVRON_AND_EXPAND_ICON = '#CBCED1FF'
export const COLOR_AUTHENTICATION_SECONDARY_TEXT = '#9EA2A8FF'

export const DARK_GRAY = '#a0a0a0FF'
export const ACTION_MENU_COLOR = '#727272FF'
export const WHITE_SMOKE = '#f1f1f1FF'

export const IC_LAUNCHER_BACKGROUND = COLOR_WHITE
export const COLOR_DRAWABLE_TINT_GREY = '#9FA2A8'
export const COLOR_DIVIDER_MESSAGE_COMPOSER = '#D8D8D8'
export const COLOR_LIGHT_THEME = '#FBFBFB'
export const COLOR_DIM = '#00000099'
export const COLOR_BACKGROUND_MEMBER_CONTAINER = '#0000004D'
export const TRANSLUCENT_WHITE = '#F1F1F170'
export const COLOR_EMOJI_ICON = '#767676FF'
export const QUOTE_BAR = '#A0A0A0'
export const COLOR_SEPARATOR = '#0000001F'
export const COLOR_LIGHT_GREY = '#F4F5F7'*/

//Widechat specific
//export const COLOR_PRIMARY = '#008085'
/*export const WIDECHAT_STATUSBAR = '#008085'
export const WIDECHAT_GREEN_GRADIENT_LESS_DARK = '#0B6379'
export const WIDECHAT_GREEN_GRADIENT_LIGHT = '#26a1a1'
export const WIDECHAT_GREEN_GRADIENT_DARK = '#00528c'
export const WIDECHAT_FAB = '#00C1B7'

//Just whats being used and good names
//Normal colors
export const COLOR_WHITE = '#FFFFFFFF'
export const COLOR_BLACK = '#000000FF'
export const COLOR_RED = '#FF0000FF'

export MAIN_BACKGROUND_COLOR  = COLOR_WHITE
export BUTTON_CONTAINER_COLOR = WIDECHAT_GREEN_GRADIENT_LESS_DARK //need gradient
export BUTTON_COLOR = COLOR_WHITE
export ERROR_COLOR = COLOR_RED*/