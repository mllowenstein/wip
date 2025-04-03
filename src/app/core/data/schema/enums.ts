// better structuring of data types constraints
export enum BrowserType {
  Opera = 'Opera',
  Firefox = 'Firefox',
  InternetExplorer = 'InternetExplorer',
  Edge = 'Microsoft Edge',
  Chrome = 'Google Chrome or Chromium',
  Safari = 'Safari',
  Unknown = 'Unknown',
}

export enum ScreenSizeType {
  Unknown = 'Unknown',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
}

export enum OrientationType {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Unknown = 'Unknown',
}

export enum DeviceType {
  Unknown = 'Unknown',
  Handset = 'Handset', // Mobile
  Tablet = 'Tablet',
  Web = 'Web',
}

export enum BreakpointType {
  Unknown = 'Unknown',
  HandsetPortrait = 'HandsetPortrait',
  HandsetLandscape = 'HandsetLandscape',
  TabletPortrait = 'TabletPortrait',
  TabletLandscape = 'TabletLandscape',
  WebPortrait = 'WebPortrait',
  WebLandscape = 'WebLandscape',
}

export enum MessageType {
  Error = 'error',
  Info = 'info',
  Null = '',
}

export enum MessageSource {
  Collect = 'collect',
  Sync = 'sync',
  Null = '',
}

export enum NotificationType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
}

export enum EventType {
  USER_LOGGED_IN = 'userloggedin',
  USER_LOGGED_OUT = 'userloggedout',
  DATA_MODIFIED = 'datamodified',
  NEW_CHAT_MESSAGE = 'newchatmessage',
}

export enum StorageKeys {
  Username = 'username',
  Email = 'email',
  Token = 'token',
  TokenExpiry = 'expiresAt',
  History = 'history',
  IsMember = 'isMember',
  Comments = 'comments',
  WhoAmI = 'whoami',
}

export enum ContactType {
  Home = 'Home',
  Mobile = 'Mobile',
  Email = 'Email',
  LinkedIn = 'LinkedIn',
  GitHub = 'GitHub',
}
