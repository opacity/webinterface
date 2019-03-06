export const IS_DEV = process.env.NODE_ENV === "development";

const PROTOCOL = IS_DEV ? "http" : "https";

const POLLING_NODE = IS_DEV
  ? // ? ["18.191.77.193"] // Travis broker
    ["18.188.230.212"]
  : ["poll2.opacitynodes.com"];

export const OLD_TANGLE_NODE_1 = "https://download.opacitynodes.com:14265";
export const OLD_TANGLE_NODE_2 = "https://poll.opacitynodes.com:14265";

export const PROD_IOTA_1 = "prodiota1.opacitynodes.com";
export const PROD_IOTA_2 = "prodiota2.opacitynodes.com";

export const EXCHANGE_LINK = "https://www.kucoin.com/";

const IOTA_PROVIDERS = IS_DEV
  ? // ? ["18.222.56.121", "18.191.77.193"]
    ["18.222.173.29", "18.188.230.212"]
  : [PROD_IOTA_1, PROD_IOTA_2];

const BROKERS = IS_DEV
  ? ["18.222.173.29", "18.188.230.212"] // Rebel brokers
  : // ["52.14.218.135", "18.217.133.146"] // QA brokers
    ["broker-1.opacitynodes.com", "broker-2.opacitynodes.com"];

// Hack until we have proper load balancing.
const randElem = (xs: string) => xs[Math.floor(Math.random() * xs.length)];
const randInstance = (instances: any) => {
  const firstInstance = randElem(instances);
  const remInstances = instances.filter((br: any) => br !== firstInstance);
  const secondInstance = randElem(remInstances);

  return [firstInstance, secondInstance];
};

const [ALPHA_IP, BETA_IP] = randInstance(BROKERS);
const [PROVIDER_1, PROVIDER_2] = randInstance(IOTA_PROVIDERS);

export const API = Object.freeze({
  BROKER_NODE_A: `${PROTOCOL}://${ALPHA_IP}`,
  BROKER_NODE_B: `${PROTOCOL}://${BETA_IP}`,
  V2_UPLOAD_SESSIONS_PATH: ":3000/api/v2/upload-sessions",
  V2_STATUS_PATH: ":3000/api/v2/status",
  GAS_PRICE: "https://api.blockcypher.com/v1/eth/main",
  CHUNKS_PER_REQUEST: 10
});

export const IOTA_API = Object.freeze({
  PROVIDER_A: `${PROTOCOL}://${POLLING_NODE}:14265`,
  PROVIDER_B: `${PROTOCOL}://${PROVIDER_1}:14265`,
  PROVIDER_C: `${PROTOCOL}://${PROVIDER_2}:14265`,
  ADDRESS_LENGTH: 81,
  MESSAGE_LENGTH: 2187,
  BUNDLE_SIZE: 100
});

export const UPLOAD_STATUSES = Object.freeze({
  PENDING: "PENDING",
  SENT: "SENT",
  FAILED: "FAILED"
});

export const DOWNLOAD_STATUSES = Object.freeze({
  PENDING: "PENDING",
  STANDBY: "STANDBY"
});

export const FILE = Object.freeze({
  MAX_FILE_SIZE: 250 * 1000 * 1000, // 250mb
  CHUNK_TYPES: {
    METADATA: "METADATA",
    FILE_CONTENTS: "FILE_CONTENTS"
  }
});

export const INCLUDE_TREASURE_OFFSETS = true;
export const MAX_ADDRESSES = 1000;
export const NUM_POLLING_ADDRESSES = 301;
export const IOTA_POLL_INTERVAL = 2000;

export const AGREEMENT_TYPES = Object.freeze({
  TERMS_OF_SERVICE: "TERMS_OF_SERVICE",
  PRIVACY_POLICY: "PRIVACY_POLICY"
});

export const REGISTER_RECORD_RECOVERY_PHASE = "REGISTER_RECORD_RECOVERY_PHASE";
export const REGISTER_RECORD_STORAGE_HANDLE = "REGISTER_RECORD_STORAGE_HANDLE";
export const REGISTER_CONFIRM_PAYMENT = "REGISTER_CONFIRM_PAYMENT";
export const REGISTER_SEND_PAYMENT = "REGISTER_SEND_PAYMENT";

export const DESKTOP_WIDTH = "997";
export const MOBILE_WIDTH = "567";
export const SUBSCRIPTION_DESKTOP_WIDTH = "1200";

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
    color: "#ffffff"
  },
  fontWeight: 500,
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal"
};
