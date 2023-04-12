interface IMockResponse {
  data: {
    message: string;
  };
}

export const mock = (success: boolean, timeout = 1000) => {
  return new Promise<IMockResponse>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          data: {
            message: "Success",
          },
        });
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};
