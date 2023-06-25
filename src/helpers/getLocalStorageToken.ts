export function getLocalStorageToken() {
  const tokenInfo = localStorage.getItem("token");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const parsedTokenLizerInfo = JSON.parse(tokenInfo!);

  if (parsedTokenLizerInfo) {
    return parsedTokenLizerInfo.access_token;
  } else {
    return;
  }
}
