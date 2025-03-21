/// <reference lib="webworker" />

self.onmessage = async (event: any) => {
  const { difficulty } = event!.data!;
  let nonce = 0;
  let found = false;
  let hashResult = '';
  const targetPrefix = '0'.repeat(difficulty);
}

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
