var cancellable = function (fn, args, t) {
  const intervalId = setInterval(() => fn(...args), t);
  return ()=>clearInterval(intervalId);
};
