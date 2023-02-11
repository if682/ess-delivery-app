export default function isDefined(
  value: any
): value is Exclude<any, null | undefined | ''> {
  return value !== null && value !== undefined && value !== '';
}
