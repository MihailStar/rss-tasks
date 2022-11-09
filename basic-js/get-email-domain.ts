export function getEmailDomain(email: string): string {
  const match = email.match(/@([^@]+)$/);

  return match === null ? '' : match[1];
}
