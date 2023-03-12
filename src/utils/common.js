import { ASSET_URL } from '#/config';

export const getAssetURL = (filename) => {
  if (/^(http|\/)/.test(filename)) return filename;

  return `${ASSET_URL}/v1/files/${filename}`;
};
