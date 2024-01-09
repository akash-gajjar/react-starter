import { APP_ASSET_URL } from '#/config';

export const getAssetURL = (filename) => {
  if (/^(http|\/)/.test(filename)) return filename;

  return `${APP_ASSET_URL}/v1/files/${filename}`;
};
