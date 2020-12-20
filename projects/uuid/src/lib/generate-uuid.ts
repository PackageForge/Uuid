export function generateUuid(): string {
  const template = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  return template.replace(/x/g, randomHexCharacter);
}
function randomHexCharacter() {
  return (Math.floor(Math.random() * 16)).toString(16);
}