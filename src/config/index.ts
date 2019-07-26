export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_BETA_DEV = process.env.NODE_ENV === "development-beta";
export const IS_BETA_PROD = process.env.NODE_ENV === "production-beta";

const PROTOCOL = IS_DEV ? "http" : "https";

export const STRIPE_API_KEY =
  IS_DEV || IS_BETA_DEV
    ? "pk_test_jHC9KKrYExP2pdqmuSmkPSqT00ErWapX4f"
    : "pk_live_SLMPS7zVFurFwLOKEdiICAGC00kN41fASj";

export const HOST =
  IS_DEV || IS_BETA_DEV
    ? "localhost:3001"
    : IS_BETA_PROD
      ? "beta.opacity.io"
      : "opacity.io";
export const FRONT_END_URL = `${PROTOCOL}://${HOST}`;

export const EXCHANGE_LINK = "https://www.kucoin.com/trade/OPQ-BTC";
export const GTM_ID = IS_DEV ? "GTM-MTCZFC8" : "GTM-WBG5C67";

const DEFAULT_BROKER_IP =
  IS_BETA_PROD || IS_BETA_DEV
    ? "beta-broker.opacitynodes.com"
    : IS_DEV
      ? "13.58.191.143"
      : "broker-1.opacitynodes.com";

export const API = Object.freeze({
  STORAGE_NODE: `${PROTOCOL}://${DEFAULT_BROKER_IP}:3000`,
  V1_SUBSCRIPTIONS_PATH: "/api/v1/stripe/create"
});

export const OPAQUE = Object.freeze({
  UPLOAD_OPTIONS: {
    autostart: true,
    endpoint: API.STORAGE_NODE,
    params: {
      blockSize: 64 * 1024, // 256 KiB encryption blocks
      partSize: 10 * 1024 * 1024
    }
  },
  DOWNLOAD_OPTIONS: {
    endpoint: API.STORAGE_NODE
  }
});

export const FILE_MAX_SIZE = 2000 * 1000 * 1000;

export const AGREEMENT_TYPES = Object.freeze({
  TERMS_OF_SERVICE: "TERMS_OF_SERVICE",
  PRIVACY_POLICY: "PRIVACY_POLICY",
  CODE_REVIEW_LICENSE: "CODE_REVIEW_LICENSE"
});

export const THIRD_PARTY = Object.freeze({
  COINMARKETCAP: "https://opacity.io/widget.php"
});

export const RECAPTCHA_SITEKEY =
  IS_DEV || IS_BETA_DEV
    ? "6LciI6cUAAAAAL03VKUCArV9MFS8zgQn49NHItA8"
    : "6Le3I6cUAAAAAILR-MfvTFAi258rXVSd10HVXBoI";

export const LANDING_PAGE_VIDEO =
  "https://s3.us-east-2.amazonaws.com/opacity-public/whatIsOpacity.mov";

export enum HEADER_TYPES {
  LANDING_PAGE = "LANDING_PAGE",
  FILE_MANAGER = "FILE_MANAGER",
  TEAM_PAGE = "TEAM_PAGE",
  EMPTY = "EMPTY"
}

export const DESKTOP_WIDTH = "997";
export const MOBILE_WIDTH = "567";
export const SUBSCRIPTION_DESKTOP_WIDTH = "1200";
export const LANDING_PAGE_MOBILE_WIDTH = "800";
export const HEADER_MOBILE_WIDTH = "745";
export const STANDS_OUT_TABLET_WIDTH = "872";
export const STANDS_OUT_DESKTOP_WIDTH = "1000";

export enum AUTHENTICATION_STATUSES {
  LOGGED_OUT = 0,
  LOGIN_PENDING,
  LOGIN_FAILURE,
  LOGGED_IN
}

export enum SIGNUP_PHASES {
  SELECT_PLAN = 0,
  RECORD_RECOVERY_PHRASE,
  RECORD_STORAGE_PIN,
  SEND_PAYMENT,
  CONFIRM_PAYMENT
}

export enum FIAT_PAYMENT_STATUSES {
  IDLE = 0,
  PENDING,
  SUCCESS,
  ERROR
}

export const theme = {
  background: "#ffffff",
  header: {
    background: "#2e6dde",
    color: "#ffffff"
  },
  title: {
    size: "22",
    color: "#2e6dde",
    underline: {
      color: "#80b9ff",
      height: "1"
    }
  },
  container: {
    background: "#d5e2f8",
    content: "#4f5e78",
    title: {
      size: "22",
      underline: {
        width: "33",
        color: "#80b9ff",
        height: "3"
      }
    }
  },
  slider: {
    defaultColor: "rgba(46, 109, 222, 0.2)",
    hoverColor: "#2e6dde"
  },
  link: {
    color: "#2e6dde"
  },
  label: {
    color: "#2e6dde"
  },
  error: {
    color: "#ff6767"
  },
  input: {
    content: "#b0bed1",
    background: "rgba(46, 109, 222, 0.2)",
    border: {
      color: "#2e6dde"
    }
  },
  password: {
    background: "#4f5e78"
  },
  button: {
    background: "#2e6dde",
    color: "#ffffff",
    disabled: {
      background: "#dfdfdf",
      color: "#4f5e78",
      border: "1px solid #4f5e78"
    }
  },
  fontWeight: 500,
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal"
};

export enum SHADOW {
  LEFT,
  RIGHT,
  CENTER
}

export const PLANS = [
  {
    borderColor: "#ECCD32",
    content: "Discover secure file sharing using blockchain technology",
    discountedUsdCost: null,
    durationInMonths: 12,
    ethCost: 0,
    includesDesktopApp: false,
    isAvailable: true,
    isHighlighted: false,
    permalink: "free",
    shadow: SHADOW.LEFT,
    specialPricing: "Free",
    storageInGB: 10,
    storageLimit: "10 GB",
    title: "Free",
    usdCost: 0,
    zIndex: 0,
    features: [
      "End-to-End Encryption",
      "Unlimited Downloads",
      "Private File Sharing",
      "No 3rd Party Tracking",
      "Access Anywhere",
      "2GB File Size"
    ]
  },
  {
    borderColor: "#9AD9FE",
    content: "Perfect for personal and family use",
    discountedUsdCost: null,
    durationInMonths: 12,
    ethCost: 2,
    includesDesktopApp: false,
    isAvailable: true,
    isHighlighted: false,
    permalink: "basic",
    shadow: SHADOW.LEFT,
    specialPricing: null,
    storageInGB: 128,
    storageLimit: "128 GB",
    title: "Basic",
    usdCost: 39.99,
    zIndex: 1,
    features: [
      "End-to-End Encryption",
      "Unlimited Downloads",
      "Private File Sharing",
      "No 3rd Party Tracking",
      "Access Anywhere",
      "2GB File Size"
    ]
  },
  {
    borderColor: "#918DEA",
    content: "Secure and access your files Anywhere",
    discountedUsdCost: 79.99,
    durationInMonths: 12,
    ethCost: 16,
    includesDesktopApp: true,
    isAvailable: true,
    isHighlighted: true,
    permalink: "professional",
    shadow: SHADOW.CENTER,
    specialPricing: null,
    storageInGB: 1024,
    storageLimit: "1 TB",
    title: "Professional",
    usdCost: 99.99,
    zIndex: 2,
    features: [
      "End-to-End Encryption",
      "Unlimited Downloads",
      "Private File Sharing",
      "No 3rd Party Tracking",
      "Access Anywhere",
      "Unlimited File Size*",
      "Desktop Sync"
    ]
  },
  {
    borderColor: "#DE9E93",
    content: "Secure file management for your organization",
    discountedUsdCost: null,
    durationInMonths: 12,
    ethCost: 32,
    includesDesktopApp: true,
    isAvailable: true,
    isHighlighted: false,
    permalink: "business",
    shadow: SHADOW.RIGHT,
    specialPricing: null,
    storageInGB: 2048,
    storageLimit: "2 TB",
    title: "Business",
    usdCost: 119.99,
    zIndex: 1,
    features: [
      "End-to-End Encryption",
      "Unlimited Downloads",
      "Private File Sharing",
      "No 3rd Party Tracking",
      "Access Anywhere",
      "Unlimited File Size*",
      "Desktop Sync"
    ]
  },
  {
    borderColor: "#8ADB75",
    content: "All the secure file storage you need ",
    discountedUsdCost: null,
    durationInMonths: 12,
    ethCost: 0,
    includesDesktopApp: false,
    isAvailable: false,
    isHighlighted: false,
    permalink: "enterprise",
    shadow: SHADOW.RIGHT,
    specialPricing: "Custom Pricing",
    storageInGB: 9999,
    storageLimit: "Unlimited",
    title: "Enterprise",
    usdCost: 0,
    zIndex: 0,
    features: [
      "Opacity can provide the storage and services your business needs. S3 compliant API integrates easily with most existing implementations."
    ]
  }
];

const ICON_FILE = require("../assets/images/file.svg");
const ICON_JPG = require("../assets/images/jpg.svg");
const ICON_PNG = require("../assets/images/png.svg");
const ICON_PDF = require("../assets/images/pdf.svg");
const ICON_DOC = require("../assets/images/doc.svg");

export const DATA_TYPES_ICONS = [
  {
    name: ".none",
    icon: ICON_FILE
  },
  {
    name: ".jpg",
    icon: ICON_JPG
  },
  {
    name: ".pdf",
    icon: ICON_PDF
  },
  {
    name: ".doc",
    icon: ICON_DOC
  },
  {
    name: ".png",
    icon: ICON_PNG
  }
];
