import JWTDecode from 'jwt-decode';

/**
 * Parse token and return encoded Object
 *
 * @param {string} token - Valid token string
 * @return {object} Token Information
 */
const parseTokenInfo = (token) => {
  try {
    return JWTDecode(token);
  } catch (error) {
    console.error(error);

    return {};
  }
};

export default parseTokenInfo;
