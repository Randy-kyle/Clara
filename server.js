exports.handler = async (event) => {
  const validCodes = process.env.ACCESS_CODES.split(',');
  const { code } = JSON.parse(event.body);

  if (validCodes.includes(code)) {
    return { statusCode: 200, body: JSON.stringify({ success: true, redirect: '/video.html' }) };
  }
  return { statusCode: 401, body: JSON.stringify({ success: false, message: 'Invalid code' }) };
};
