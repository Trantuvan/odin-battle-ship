export default function filterUntil(data, fn, stopFn) {
  const { result } = data.reduce(
    // eslint-disable-next-line no-shadow
    ({ result, isStopped }, item) => {
      // eslint-disable-next-line no-param-reassign
      isStopped = isStopped || stopFn(item);
      return {
        result: !isStopped && fn(item) ? [...result, item] : result,
        isStopped,
      };
    },
    { result: [], isStopped: false }
  );
  return result;
}
